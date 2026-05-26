'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#def2f1] p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-[#17252a] font-semibold mb-2">Name</label>
        <input
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border border-[#3aafa9] rounded-lg focus:outline-none focus:border-[#2b7a78]"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#17252a] font-semibold mb-2">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-[#3aafa9] rounded-lg focus:outline-none focus:border-[#2b7a78]"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#17252a] font-semibold mb-2">Phone</label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-2 border border-[#3aafa9] rounded-lg focus:outline-none focus:border-[#2b7a78]"
          placeholder="+91 XXXXXXXXXX"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#17252a] font-semibold mb-2">Subject</label>
        <input
          type="text"
          {...register('subject')}
          className="w-full px-4 py-2 border border-[#3aafa9] rounded-lg focus:outline-none focus:border-[#2b7a78]"
          placeholder="Your inquiry subject"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#17252a] font-semibold mb-2">Message</label>
        <textarea
          {...register('message')}
          rows={6}
          className="w-full px-4 py-2 border border-[#3aafa9] rounded-lg focus:outline-none focus:border-[#2b7a78]"
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          ✗ Error sending message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#2b7a78] text-white font-semibold py-3 rounded-lg hover:bg-[#3aafa9] transition disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
