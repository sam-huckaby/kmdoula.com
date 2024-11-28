'use client';
import { FormEvent, useState } from "react";

export const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);
      setSubmitStatus('idle');
  
      const formData = new FormData(e.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formJson),
        });
  
        if (!response.ok) throw new Error('Failed to send message');
        
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } catch (error) {
        setSubmitStatus('error');
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border-b border-b-solid border-slate-200 dark:border-slate-600 
                    bg-white dark:bg-slate-800 
                    focus:border-emerald-500 focus:ring-emerald-500 
                    dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400
                    dark:placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-b border-b-solid border-slate-200 dark:border-slate-600 
                    bg-white dark:bg-slate-800 
                    focus:border-emerald-500 focus:ring-emerald-500 
                    dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400
                    dark:placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full border-b border-b-solid border-slate-200 dark:border-slate-600 
                    bg-white dark:bg-slate-800 
                    focus:border-emerald-500 focus:ring-emerald-500 
                    dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400
                    dark:placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Due Date</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  required
                  className="mt-1 block w-full border-b border-b-solid border-slate-200 dark:border-slate-600 
                    bg-white dark:bg-slate-800 
                    focus:border-emerald-500 focus:ring-emerald-500 
                    dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400"
                />
              </div>
              <div>
                <label htmlFor="questions" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Questions</label>
                <textarea
                  id="questions"
                  name="questions"
                  rows={4}
                  required
                  className="mt-1 block w-full border-b border-b-solid border-slate-200 dark:border-slate-600 
                    bg-white dark:bg-slate-800 
                    focus:border-emerald-500 focus:ring-emerald-500 
                    dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400
                    dark:placeholder-slate-400"
                ></textarea>
              </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 
            text-white px-8 py-2 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
            dark:focus:ring-emerald-400 dark:ring-offset-slate-900
            transition-colors duration-200 fancy-font
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send'}
        </button>
  
        {submitStatus === 'success' && (
          <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
        )}
      </form>
    );
  };