import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // เปลี่ยนจาก AppTabs มาใช้ Stack (ระบบหน้าจอแบบวางซ้อนกัน) 
    // และตั้งค่า headerShown: false เพื่อซ่อนแถบชื่อด้านบนของระบบ เพราะเราทำ Header เองแล้ว
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* แจ้งระบบให้รู้จักหน้า Login (index) */}
      <Stack.Screen name="index" />
      
      {/* แจ้งระบบให้รู้จักหน้า สินค้า (products) */}
      <Stack.Screen name="products" />
      
    </Stack>
  );
}