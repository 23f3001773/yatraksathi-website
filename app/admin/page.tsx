"use client";
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // डेटाबेस से डेटा लाने का फंक्शन
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "enquiries"));
        const dataList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEnquiries(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center text-xl font-bold">Loading Data... Please wait.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          📊 Admin Dashboard <span className="text-sm bg-[#ea2330] text-white px-3 py-1 rounded-full">{enquiries.length} Enquiries</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white text-sm uppercase tracking-wider">
                  <th className="p-4">Date</th>
                  <th className="p-4">Customer Name</th>
                  <th className="p-4">Mobile Number</th>
                  <th className="p-4">Service Type</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">No enquiries yet.</td>
                  </tr>
                ) : (
                  enquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-red-50 transition-colors">
                      <td className="p-4 text-gray-600 font-medium">{item.date}</td>
                      <td className="p-4 font-bold text-gray-800">{item.name}</td>
                      <td className="p-4 text-green-600 font-bold font-mono">
                        <a href={`tel:${item.mobile}`} className="hover:underline">{item.mobile}</a>
                      </td>
                      <td className="p-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                          {item.service}
                        </span>
                      </td>
                      <td className="p-4">
                        <a 
                          href={`https://wa.me/91${item.mobile}?text=Hello ${item.name}, thank you for contacting Yatraksathi.`} 
                          target="_blank"
                          className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#128C7E] flex items-center gap-1 w-fit"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}