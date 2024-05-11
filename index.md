---
layout: page
title: Nhà Ứng sinh
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPButton
} from 'vitepress/theme'

import StartLayout from '.vitepress/theme/layouts/StartLayout.vue';

const members = [
  {
    avatar: 'images/phuongdien/nb.jpg',
    name: 'Nhân bản',
    title: 'Đào tạo ứng sinh nên một con người trưởng thành. Ứng sinh cần cố gắng để có được trí năng tốt, ý chí vững vàng, quân bình tâm lí và sức khỏe tốt.',
  },
  {
    avatar: 'images/phuongdien/tl.jpg',
    name: 'Thiêng liêng',
    title: 'Giúp ứng sinh nhận biết và có một tình yêu cá vị với Đức  Giê-su Ki-tô. Từ đó, ứng sinh lắng nghe tiếng Chúa mời gọi và xác tín ơn gọi sống của mình.',
  },
  {
    avatar: 'images/phuongdien/cd.jpg',
    name: 'Cộng đoàn',
    title: 'Giúp ứng sinh có khả năng sống chung và cộng tác với người khác với tinh thần quảng đại, rộng mở và khiêm tốn phục vụ.',
  },
  {
    avatar: 'images/phuongdien/tt.jpg',
    name: 'Tri thức',
    title: 'Giúp ứng sinh trau dồi kiên thức để có thể phục vụ Chúa và các linh hồn một cách hữu hiệu và đắc lực hơn.',
  },
  {
    avatar: 'images/phuongdien/td.jpg',
    name: 'Tông đồ',
    title: 'Giúp ứng sinh có tinh thần tông đồ theo phương thế dòng Tên.',
  }
];
</script>

<style>
.arrow {
    border: solid black;
    opacity: 0.5;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>

<VPTeamPage>
  <StartLayout></StartLayout>
  <br>
  <div align="center">
    <VPButton theme='brand' font-size='40px' text='"Đến mà xem" (Ga 1, 39)' href="/lienhe"
    />
  </div>
  <VPTeamPageTitle>
    <template #title>
      Mục đích và khuôn mẫu
    </template>
    <template #lead>
      Nhà Ứng sinh Dòng Tên tạo cơ hội và điều kiện thuận lợi nhằm ươm mầm ơn gọi cho các bạn trẻ đang có ước muốn theo đuổi lý tưởng tận hiến.
      <br><br>
      Nhà ứng sinh đảm nhận việc đào luyện theo chiều hướng phát triển toàn diện: Nhân Bản, Thiêng Liêng, Cộng Đoàn, Trí Thức và Tông Đồ.
      <br><br>
      Gia đình thánh của Chúa Giê-su ở Na-da-rét là khuôn mẫu sống động nhất của Nhà Ứng Sinh Dòng Tên. Nơi gia đình thánh, "Người ngày càng khôn lớn và được Thiên Chúa cũng như mọi người thương mến." (Lc 2, 52)
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium"
    :members="members"
  />
</VPTeamPage>
