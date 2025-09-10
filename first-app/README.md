# SkillTag

กำหนดชื่อ skill
มี level แบบระดับของskill
ใช้ <span> เป็น container
ใช้ level? :"" เพื่อตรวจสอบ ว่ามี levelมั้ย


# UserProfileCard

ีกำหนด user object
onViewDetails คือตัวปุ่ม "ดูรายละเอียด"
กำหนด skill เป็น array level เป็น optional

 "img src={user.avatarUrl}"
เป็นตัวแสดงรูปโปรไฟล์
ตัว status-dot เอาไว่้บอกว่า user กำลังออนไลน์หรือ ออฟไลน์
ตัว SkillTag เอาไว้บอก ตัวskill

# App

import UserProfile ที่แสดงuserแต่ละคน
กำหนด object ให้ตรงตาม UserProfile
ใช้ as const ตรง skill ป้องกัน error เรื่อง type
ใช้ map() loop ผ่าน array user