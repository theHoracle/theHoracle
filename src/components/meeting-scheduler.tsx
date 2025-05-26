"use client";
import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

const MeetingScheduler = () => {
 
useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"15min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, []) 
  return (
    <div className="w-full py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
              <CalendarDays className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4">Book a Free Consultation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Schedule a 15-minute call to discuss your project needs and discover how we can help your business grow.
          </p>
        </div>
        <div className="max-w-4xl mx-auto max-h-[70vh] overflow-y-scroll">
          <div
            className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800"
            style={{
              minHeight: "600px",
              background: "var(--cal-bg-color)",
            }}
          >
            {/* cal .com embed code */}
            <Cal namespace="15min"
                calLink="thehoracle/15min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view"}}            
            />
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By scheduling a call, you agree to our terms of service and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler; 