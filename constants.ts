
import { Planet, TechItem, Discussion } from './types';

export const PLANETS: Planet[] = [
  {
    id: 'jupiter',
    name: 'Sao Mộc',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=400',
    diameter: '139,820 km',
    distance: '778.5M km',
    moons: '79',
    temp: '-110°C',
    description: 'Hành tinh lớn nhất trong Hệ Mặt Trời.',
    color: 'accent-cyan'
  },
  {
    id: 'mars',
    name: 'Sao Hỏa',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=400',
    diameter: '6,779 km',
    distance: '227.9M km',
    moons: '2',
    temp: '-65°C',
    description: 'Hành tinh đỏ đầy hứa hẹn cho sự sống.',
    color: 'accent-orange'
  },
  {
    id: 'saturn',
    name: 'Sao Thổ',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=400',
    diameter: '116,460 km',
    distance: '1.4B km',
    moons: '82',
    temp: '-178°C',
    description: 'Nổi tiếng với hệ thống vành đai tráng lệ.',
    color: 'accent-cyan'
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    id: 'jwst',
    title: 'James Webb (JWST)',
    category: 'KÍNH VIỄN VỌNG',
    description: 'Mắt thần của nhân loại đang quan sát những thiên hà đầu tiên hình thành sau Big Bang.',
    icon: 'visibility',
    link: '#',
    color: 'accent-cyan'
  },
  {
    id: 'starship',
    title: 'SpaceX Starship',
    category: 'TÊN LỬA ĐẨY',
    description: 'Hệ thống vận tải siêu nặng thế hệ mới, thiết kế để đưa con người lên Sao Hỏa.',
    icon: 'rocket',
    link: '#',
    color: 'primary'
  },
  {
    id: 'gateway',
    title: 'Trạm Gateway (Lunar)',
    category: 'TRẠM KHÔNG GIAN',
    description: 'Tiền đồn đầu tiên của nhân loại quay quanh Mặt Trăng cho sứ mệnh Artemis.',
    icon: 'satellite_alt',
    link: '#',
    color: 'accent-orange'
  }
];

export const DISCUSSIONS: Discussion[] = [
  {
    id: '1',
    author: 'Nguyễn Hải',
    title: 'Liệu có sự sống trên các mặt trăng của Sao Mộc?',
    replies: 42,
    tags: ['#SinhHọcVũTrụ'],
    gradient: 'from-primary to-accent-cyan'
  },
  {
    id: '2',
    author: 'SpaceLovers',
    title: 'Chia sẻ ảnh chụp Moon bằng kính thiên văn tự chế',
    replies: 156,
    tags: ['#NhiếpẢnhThiênVăn'],
    gradient: 'from-accent-orange to-red-500'
  }
];
