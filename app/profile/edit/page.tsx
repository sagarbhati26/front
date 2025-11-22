"use client";

import ProfileEditForm from "@/components/profile/ProfileEditForm";

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
      <div className="w-full max-w-[1232px] px-6 py-10">
        <ProfileEditForm />
      </div>
    </div>
  );
}