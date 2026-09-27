import {
    Pointer, Smartphone, Power, BatteryCharging, Volume2, Wifi, Phone, Users,
    MessageCircle, Mic, Camera, Image as ImageIcon, MapPin, Search, Play, Settings,
    Bell, ShieldCheck, Download, Trash2, Share2, Copy, Keyboard, Lock, Eye, Bluetooth,
    Sun, Flashlight, Navigation, Contact, Video, MoreHorizontal
} from 'lucide-react-native';

export interface LessonPreview {
    id: string;
    title: string;
    subtitle: string;
    Icon: any;
}

export interface Level {
    levelId: string;
    levelTitle: string;
    description: string;
    lessons: LessonPreview[];
}

export const CURRICULUM: Level[] = [
    // =========================================================
    // LEVEL 0
    // =========================================================
    {
        levelId: 'level_0',
        levelTitle: 'Level 0: Làm quen với điện thoại cảm ứng',
        description: 'Bắt đầu từ những nút bấm và thao tác chạm, vuốt cơ bản nhất',
        lessons: [
            {
                id: 'hardware',
                title: 'Nút nguồn, âm lượng & sạc pin',
                subtitle: 'Nhận biết các nút trên điện thoại và cách sạc pin an toàn',
                Icon: Smartphone,
            },
            {
                id: 'power_on_off',
                title: 'Bật, tắt & khởi động lại máy',
                subtitle: 'Cách bật điện thoại, tắt máy và khởi động lại khi máy bị chậm',
                Icon: Power,
            },
            {
                id: 'battery',
                title: 'Xem pin còn bao nhiêu',
                subtitle: 'Nhìn biểu tượng pin và biết khi nào cần sạc điện thoại',
                Icon: BatteryCharging,
            },
            {
                id: 'touch_basic',
                title: 'Chạm màn hình',
                subtitle: 'Chạm một lần, chạm hai lần và chọn một mục trên màn hình',
                Icon: Pointer,
            },
            {
                id: 'swipe',
                title: 'Vuốt màn hình',
                subtitle: 'Vuốt lên, xuống, trái, phải để di chuyển trên điện thoại',
                Icon: Pointer,
            },
            {
                id: 'scroll',
                title: 'Kéo và xem thêm nội dung',
                subtitle: 'Cách kéo màn hình để xem phần nội dung bên dưới',
                Icon: MoreHorizontal,
            },
            {
                id: 'volume',
                title: 'Tăng giảm âm lượng',
                subtitle: 'Điều chỉnh âm thanh khi nghe gọi, xem video và nghe nhạc',
                Icon: Volume2,
            },
            {
                id: 'brightness',
                title: 'Tăng giảm độ sáng',
                subtitle: 'Điều chỉnh màn hình sáng hoặc tối để dễ nhìn hơn',
                Icon: Sun,
            },
            {
                id: 'flashlight',
                title: 'Bật đèn pin',
                subtitle: 'Tìm và sử dụng đèn pin khi trời tối hoặc mất điện',
                Icon: Flashlight,
            },
            {
                id: 'screen_lock',
                title: 'Khóa và mở khóa màn hình',
                subtitle: 'Cách khóa màn hình và mở điện thoại khi cần sử dụng',
                Icon: Lock,
            },
        ],
    },

    // =========================================================
    // LEVEL 1
    // =========================================================
    {
        levelId: 'level_1',
        levelTitle: 'Level 1: Những thao tác cơ bản hằng ngày',
        description: 'Quản lý màn hình chính, thông báo, Wi-Fi và bàn phím',
        lessons: [
            {
                id: 'home_screen',
                title: 'Làm quen màn hình chính',
                subtitle: 'Nhận biết biểu tượng ứng dụng, đồng hồ, pin và thông báo',
                Icon: Smartphone,
            },
            {
                id: 'notification',
                title: 'Xem thông báo',
                subtitle: 'Biết khi có tin nhắn, cuộc gọi nhỡ hoặc thông báo mới',
                Icon: Bell,
            },
            {
                id: 'control_center',
                title: 'Mở bảng điều khiển nhanh',
                subtitle: 'Bật tắt Wi-Fi, âm thanh, Bluetooth, đèn pin và các chức năng quen thuộc',
                Icon: Settings,
            },
            {
                id: 'wifi',
                title: 'Kết nối Wi-Fi',
                subtitle: 'Kết nối điện thoại với Wi-Fi ở nhà hoặc nơi quen thuộc',
                Icon: Wifi,
            },
            {
                id: 'mobile_data',
                title: 'Bật tắt dữ liệu di động',
                subtitle: 'Hiểu khi nào điện thoại dùng Wi-Fi và khi nào dùng 4G/5G',
                Icon: Wifi,
            },
            {
                id: 'keyboard_basic',
                title: 'Làm quen bàn phím',
                subtitle: 'Chạm từng chữ để nhập tên, số điện thoại và tin nhắn',
                Icon: Keyboard,
            },
            {
                id: 'voice_typing',
                title: 'Nói để điện thoại viết',
                subtitle: 'Dùng giọng nói để nhập tiếng Việt thay vì gõ bàn phím',
                Icon: Mic,
            },
            {
                id: 'copy_text',
                title: 'Chọn và sao chép chữ',
                subtitle: 'Cách chọn, sao chép và dán một đoạn chữ đơn giản',
                Icon: Copy,
            },
            {
                id: 'share_basic',
                title: 'Chia sẻ ảnh và thông tin',
                subtitle: 'Gửi một bức ảnh hoặc nội dung cho người khác',
                Icon: Share2,
            },
            {
                id: 'delete_basic',
                title: 'Xóa và khôi phục thao tác',
                subtitle: 'Biết cách xóa ảnh, tin nhắn hoặc mục không cần thiết',
                Icon: Trash2,
            },
        ],
    },

    // =========================================================
    // LEVEL 2
    // =========================================================
    {
        levelId: 'level_2',
        levelTitle: 'Level 2: Nghe gọi & Danh bạ',
        description: 'Cách lưu số con cháu và gọi điện thoại hằng ngày',
        lessons: [
            {
                id: 'call_basic',
                title: 'Nghe và gọi điện thoại',
                subtitle: 'Cách nhận cuộc gọi, gọi cho người thân và kết thúc cuộc gọi',
                Icon: Phone,
            },
            {
                id: 'call_missed',
                title: 'Xem cuộc gọi nhỡ',
                subtitle: 'Biết ai vừa gọi và gọi lại khi cần',
                Icon: Phone,
            },
            {
                id: 'contacts',
                title: 'Mở danh bạ',
                subtitle: 'Tìm người thân đã lưu trong điện thoại',
                Icon: Contact,
            },
            {
                id: 'save_contact',
                title: 'Lưu số người thân',
                subtitle: 'Thêm tên và số điện thoại của con cháu vào danh bạ',
                Icon: Users,
            },
            {
                id: 'edit_contact',
                title: 'Sửa thông tin liên hệ',
                subtitle: 'Đổi tên hoặc cập nhật số điện thoại đã lưu',
                Icon: Users,
            },
            {
                id: 'favorite_contact',
                title: 'Đưa người thân vào mục yêu thích',
                subtitle: 'Để gọi nhanh cho những người thường xuyên liên lạc',
                Icon: Users,
            },
            {
                id: 'call_from_contact',
                title: 'Gọi từ danh bạ',
                subtitle: 'Tìm tên người thân rồi bấm gọi thay vì nhập số',
                Icon: Phone,
            },
            {
                id: 'speaker_call',
                title: 'Bật loa ngoài khi gọi',
                subtitle: 'Cách bật loa ngoài để nghe rõ hơn khi nói chuyện',
                Icon: Volume2,
            },
            {
                id: 'mute_call',
                title: 'Tắt tiếng khi đang gọi',
                subtitle: 'Tạm thời tắt micro khi không muốn người bên kia nghe',
                Icon: Mic,
            },
            {
                id: 'emergency_call',
                title: 'Gọi số khẩn cấp',
                subtitle: 'Biết cách gọi số khẩn cấp khi có tình huống cần trợ giúp',
                Icon: Phone,
            },
        ],
    },

    // =========================================================
    // LEVEL 3
    // =========================================================
    {
        levelId: 'level_3',
        levelTitle: 'Level 3: Nhắn tin & Zalo',
        description: 'Nhắn tin, gọi video và gửi ảnh cho gia đình qua Zalo',
        lessons: [
            {
                id: 'zalo_open',
                title: 'Mở và làm quen Zalo',
                subtitle: 'Tìm biểu tượng Zalo và mở ứng dụng',
                Icon: MessageCircle,
            },
            {
                id: 'zalo_contacts',
                title: 'Tìm người thân trên Zalo',
                subtitle: 'Tìm bạn bè, con cháu và người quen trong danh bạ',
                Icon: Users,
            },
            {
                id: 'zalo_message',
                title: 'Nhắn tin Zalo',
                subtitle: 'Viết và gửi tin nhắn cho người thân',
                Icon: MessageCircle,
            },
            {
                id: 'zalo_voice',
                title: 'Gửi tin nhắn bằng giọng nói',
                subtitle: 'Bấm giữ micro và nói thay vì gõ chữ',
                Icon: Mic,
            },
            {
                id: 'zalo_photo',
                title: 'Gửi ảnh qua Zalo',
                subtitle: 'Chọn ảnh trong điện thoại và gửi cho người thân',
                Icon: ImageIcon,
            },
            {
                id: 'zalo_camera',
                title: 'Chụp ảnh và gửi ngay trên Zalo',
                subtitle: 'Mở camera trong cuộc trò chuyện để chụp và gửi ảnh',
                Icon: Camera,
            },
            {
                id: 'zalo_video_call',
                title: 'Gọi video cho người thân',
                subtitle: 'Gọi và nhìn thấy khuôn mặt con cháu qua màn hình',
                Icon: Video,
            },
            {
                id: 'zalo_receive_photo',
                title: 'Nhận và xem ảnh người thân gửi',
                subtitle: 'Mở ảnh được gửi trong cuộc trò chuyện và xem lại',
                Icon: ImageIcon,
            },
            {
                id: 'zalo_receive_voice',
                title: 'Nghe tin nhắn thoại',
                subtitle: 'Bấm phát để nghe người thân gửi tin nhắn bằng giọng nói',
                Icon: Mic,
            },
            {
                id: 'zalo_group',
                title: 'Làm quen nhóm gia đình',
                subtitle: 'Xem tin nhắn trong nhóm gia đình và gửi lời nhắn chung',
                Icon: Users,
            },
        ],
    },

    // =========================================================
    // LEVEL 4
    // =========================================================
    {
        levelId: 'level_4',
        levelTitle: 'Level 4: Camera & Lưu giữ kỷ niệm',
        description: 'Chụp ảnh, quay video và xem lại kỷ niệm trong thư viện',
        lessons: [
            {
                id: 'camera_open',
                title: 'Mở camera',
                subtitle: 'Tìm và mở ứng dụng camera trên điện thoại',
                Icon: Camera,
            },
            {
                id: 'take_photo',
                title: 'Chụp một bức ảnh',
                subtitle: 'Đưa điện thoại lên, lấy khung hình và bấm chụp',
                Icon: Camera,
            },
            {
                id: 'selfie',
                title: 'Chụp ảnh selfie',
                subtitle: 'Chuyển sang camera trước và chụp ảnh chính mình',
                Icon: Camera,
            },
            {
                id: 'camera_zoom',
                title: 'Phóng to và thu nhỏ khi chụp',
                subtitle: 'Dùng thao tác hai ngón tay để điều chỉnh khung hình',
                Icon: Search,
            },
            {
                id: 'camera_flash',
                title: 'Bật tắt đèn flash',
                subtitle: 'Biết khi nào nên dùng đèn flash khi chụp ảnh',
                Icon: Flashlight,
            },
            {
                id: 'view_photo',
                title: 'Xem lại ảnh vừa chụp',
                subtitle: 'Mở ảnh ngay sau khi chụp và xem kết quả',
                Icon: ImageIcon,
            },
            {
                id: 'view_gallery',
                title: 'Mở thư viện ảnh',
                subtitle: 'Tìm và xem những bức ảnh đã lưu trong điện thoại',
                Icon: ImageIcon,
            },
            {
                id: 'delete_photo',
                title: 'Xóa ảnh không cần thiết',
                subtitle: 'Chọn và xóa ảnh bị mờ hoặc chụp nhầm',
                Icon: Trash2,
            },
            {
                id: 'share_photo',
                title: 'Gửi ảnh cho người thân',
                subtitle: 'Chia sẻ ảnh qua Zalo hoặc ứng dụng quen thuộc',
                Icon: Share2,
            },
            {
                id: 'photo_video',
                title: 'Chụp ảnh và quay video',
                subtitle: 'Phân biệt chế độ chụp ảnh và quay video',
                Icon: Video,
            },
        ],
    },

    // =========================================================
    // LEVEL 5
    // =========================================================
    {
        levelId: 'level_5',
        levelTitle: 'Level 5: Xem video & Tìm thông tin trên YouTube',
        description: 'Tìm kiếm video, bài hát và chương trình giải trí',
        lessons: [
            {
                id: 'youtube_open',
                title: 'Mở YouTube',
                subtitle: 'Tìm biểu tượng YouTube và mở ứng dụng',
                Icon: Play,
            },
            {
                id: 'youtube_search',
                title: 'Tìm video bằng ô tìm kiếm',
                subtitle: 'Tìm bài hát, cải lương, tin tức và nội dung mình thích',
                Icon: Search,
            },
            {
                id: 'youtube_voice_search',
                title: 'Tìm video bằng giọng nói',
                subtitle: 'Bấm micro và nói nội dung muốn tìm',
                Icon: Mic,
            },
            {
                id: 'youtube_play',
                title: 'Phát và tạm dừng video',
                subtitle: 'Bấm màn hình để dừng, phát lại hoặc tiếp tục xem',
                Icon: Play,
            },
            {
                id: 'youtube_volume',
                title: 'Điều chỉnh âm thanh khi xem',
                subtitle: 'Tăng giảm âm lượng để nghe rõ video',
                Icon: Volume2,
            },
            {
                id: 'youtube_fullscreen',
                title: 'Xem video toàn màn hình',
                subtitle: 'Phóng video lớn hơn để dễ nhìn',
                Icon: Eye,
            },
            {
                id: 'youtube_subscribe',
                title: 'Theo dõi kênh quen thuộc',
                subtitle: 'Biết cách đăng ký theo dõi một kênh YouTube',
                Icon: Play,
            },
            {
                id: 'youtube_history',
                title: 'Tìm lại video đã xem',
                subtitle: 'Mở lịch sử để tìm video đã xem trước đó',
                Icon: Play,
            },
            {
                id: 'youtube_share',
                title: 'Gửi video cho người thân',
                subtitle: 'Chia sẻ một video YouTube qua Zalo',
                Icon: Share2,
            },
            {
                id: 'youtube_safe',
                title: 'Nhận biết video và quảng cáo',
                subtitle: 'Phân biệt nội dung video với quảng cáo và tránh bấm nhầm',
                Icon: ShieldCheck,
            },
        ],
    },

    // =========================================================
    // LEVEL 6
    // =========================================================
    {
        levelId: 'level_6',
        levelTitle: 'Level 6: Bản đồ & Đi lại',
        description: 'Tìm địa điểm, xem đường đi và chia sẻ vị trí',
        lessons: [
            {
                id: 'maps_open',
                title: 'Mở Google Maps',
                subtitle: 'Tìm và mở ứng dụng bản đồ trên điện thoại',
                Icon: MapPin,
            },
            {
                id: 'maps_location',
                title: 'Xem vị trí hiện tại',
                subtitle: 'Biết chấm xanh trên bản đồ đang ở đâu',
                Icon: MapPin,
            },
            {
                id: 'maps_search',
                title: 'Tìm một địa điểm',
                subtitle: 'Tìm bệnh viện, chợ, siêu thị hoặc địa chỉ người thân',
                Icon: Search,
            },
            {
                id: 'maps_voice_search',
                title: 'Tìm địa điểm bằng giọng nói',
                subtitle: 'Nói tên địa điểm thay vì gõ bàn phím',
                Icon: Mic,
            },
            {
                id: 'maps_directions',
                title: 'Xem đường đi',
                subtitle: 'Chọn điểm đến và xem hướng di chuyển trên bản đồ',
                Icon: Navigation,
            },
            {
                id: 'maps_walk',
                title: 'Xem đường đi bộ',
                subtitle: 'Xem hướng dẫn khi đi bộ đến một địa điểm gần đó',
                Icon: Navigation,
            },
            {
                id: 'maps_car',
                title: 'Xem đường đi bằng ô tô hoặc xe máy',
                subtitle: 'Xem tuyến đường và thời gian di chuyển dự kiến',
                Icon: Navigation,
            },
            {
                id: 'maps_share',
                title: 'Gửi vị trí cho người thân',
                subtitle: 'Chia sẻ địa điểm hoặc vị trí hiện tại qua Zalo',
                Icon: Share2,
            },
            {
                id: 'maps_save',
                title: 'Lưu địa điểm quen thuộc',
                subtitle: 'Lưu những nơi thường đến như nhà, bệnh viện hoặc chợ',
                Icon: MapPin,
            },
            {
                id: 'maps_practice',
                title: 'Thực hành tìm đường',
                subtitle: 'Tự tìm đường từ nhà đến một địa điểm quen thuộc',
                Icon: Navigation,
            },
        ],
    },

    // =========================================================
    // LEVEL 7
    // =========================================================
    {
        levelId: 'level_7',
        levelTitle: 'Level 7: Cài đặt & Quản lý điện thoại',
        description: 'Cài đặt chữ to, nhạc chuông và quản lý ứng dụng',
        lessons: [
            {
                id: 'settings_basic',
                title: 'Mở phần Cài đặt',
                subtitle: 'Tìm và làm quen với các mục cài đặt quan trọng',
                Icon: Settings,
            },
            {
                id: 'wifi_settings',
                title: 'Quản lý Wi-Fi',
                subtitle: 'Kết nối, ngắt kết nối và chọn mạng Wi-Fi quen thuộc',
                Icon: Wifi,
            },
            {
                id: 'bluetooth',
                title: 'Làm quen Bluetooth',
                subtitle: 'Biết Bluetooth dùng để kết nối với thiết bị gần đó',
                Icon: Bluetooth,
            },
            {
                id: 'ringtone',
                title: 'Đổi âm thanh cuộc gọi',
                subtitle: 'Chọn nhạc chuông và điều chỉnh âm lượng cuộc gọi',
                Icon: Volume2,
            },
            {
                id: 'font_size',
                title: 'Tăng kích thước chữ',
                subtitle: 'Chỉnh chữ lớn hơn để người lớn tuổi dễ đọc',
                Icon: Eye,
            },
            {
                id: 'screen_timeout',
                title: 'Chỉnh thời gian tắt màn hình',
                subtitle: 'Điều chỉnh thời gian màn hình tự tắt khi không sử dụng',
                Icon: Smartphone,
            },
            {
                id: 'app_install',
                title: 'Cài ứng dụng từ CH Play',
                subtitle: 'Tìm và cài một ứng dụng quen thuộc từ kho ứng dụng',
                Icon: Download,
            },
            {
                id: 'app_delete',
                title: 'Gỡ ứng dụng không cần thiết',
                subtitle: 'Xóa ứng dụng không dùng để điện thoại gọn gàng hơn',
                Icon: Trash2,
            },
            {
                id: 'storage',
                title: 'Kiểm tra bộ nhớ',
                subtitle: 'Biết khi nào điện thoại gần đầy ảnh, video hoặc ứng dụng',
                Icon: Smartphone,
            },
            {
                id: 'software_update',
                title: 'Cập nhật điện thoại',
                subtitle: 'Nhận biết thông báo cập nhật và biết khi nào cần nhờ người thân',
                Icon: Settings,
            },
        ],
    },

    // =========================================================
    // LEVEL 8
    // =========================================================
    {
        levelId: 'level_8',
        levelTitle: 'Level 8: An toàn & Tránh lừa đảo trên điện thoại',
        description: 'Nhận biết lừa đảo, tin nhắn giả mạo và bảo vệ thông tin',
        lessons: [
            {
                id: 'screen_lock_security',
                title: 'Đặt khóa màn hình',
                subtitle: 'Dùng mã PIN hoặc cách khóa màn hình phù hợp để bảo vệ điện thoại',
                Icon: Lock,
            },
            {
                id: 'unknown_call',
                title: 'Xử lý cuộc gọi từ số lạ',
                subtitle: 'Biết cách bình tĩnh khi nhận cuộc gọi từ người không quen',
                Icon: Phone,
            },
            {
                id: 'spam_message',
                title: 'Nhận biết tin nhắn đáng ngờ',
                subtitle: 'Cẩn thận với tin nhắn yêu cầu cung cấp thông tin hoặc bấm liên kết',
                Icon: ShieldCheck,
            },
            {
                id: 'unknown_link',
                title: 'Không bấm liên kết lạ',
                subtitle: 'Nhận biết các đường link không quen thuộc được gửi qua tin nhắn',
                Icon: ShieldCheck,
            },
            {
                id: 'otp',
                title: 'Bảo vệ mã OTP',
                subtitle: 'Hiểu mã xác nhận và tuyệt đối không đọc mã cho người lạ',
                Icon: Lock,
            },
            {
                id: 'personal_information',
                title: 'Bảo vệ thông tin cá nhân',
                subtitle: 'Biết những thông tin không nên gửi cho người không quen',
                Icon: ShieldCheck,
            },
            {
                id: 'fake_prize',
                title: 'Cẩn thận với thông báo trúng thưởng',
                subtitle: 'Nhận biết những lời mời nhận quà hoặc tiền có dấu hiệu bất thường',
                Icon: ShieldCheck,
            },
            {
                id: 'fake_support',
                title: 'Cẩn thận với người tự xưng nhân viên hỗ trợ',
                subtitle: 'Biết cách xử lý khi có người yêu cầu cài ứng dụng hoặc chia sẻ mã',
                Icon: ShieldCheck,
            },
            {
                id: 'ask_family',
                title: 'Khi nghi ngờ, hỏi người thân',
                subtitle: 'Biết dừng lại và nhờ con cháu kiểm tra trước khi làm tiếp',
                Icon: Users,
            },
            {
                id: 'emergency_safety',
                title: 'Khi điện thoại có vấn đề bất thường',
                subtitle: 'Biết khóa máy, ngắt kết nối và nhờ người thân hỗ trợ',
                Icon: ShieldCheck,
            },
        ],
    },

    // =========================================================
    // LEVEL 9
    // =========================================================
    {
        levelId: 'level_9',
        levelTitle: 'Level 9: Thực hành sử dụng điện thoại trong cuộc sống',
        description: 'Thực hành tổng hợp các kỹ năng đã học vào thực tế',
        lessons: [
            {
                id: 'daily_call',
                title: 'Gọi cho một người thân',
                subtitle: 'Tìm người trong danh bạ và thực hiện một cuộc gọi hoàn chỉnh',
                Icon: Phone,
            },
            {
                id: 'daily_zalo',
                title: 'Nhắn tin cho người thân',
                subtitle: 'Gửi một tin nhắn chữ hoặc tin nhắn thoại qua Zalo',
                Icon: MessageCircle,
            },
            {
                id: 'daily_photo',
                title: 'Chụp và gửi một bức ảnh',
                subtitle: 'Chụp ảnh rồi gửi cho con cháu qua Zalo',
                Icon: Camera,
            },
            {
                id: 'daily_video_call',
                title: 'Thực hiện một cuộc gọi video',
                subtitle: 'Gọi video và bật camera để nói chuyện với người thân',
                Icon: Video,
            },
            {
                id: 'daily_youtube',
                title: 'Tìm và xem một video',
                subtitle: 'Dùng YouTube để tìm một chương trình hoặc bài hát yêu thích',
                Icon: Play,
            },
            {
                id: 'daily_maps',
                title: 'Tìm một địa điểm trên bản đồ',
                subtitle: 'Tự tìm một địa điểm quen thuộc bằng Google Maps',
                Icon: MapPin,
            },
            {
                id: 'daily_share_location',
                title: 'Gửi vị trí cho người thân',
                subtitle: 'Chia sẻ vị trí hiện tại khi cần người thân tìm đến',
                Icon: MapPin,
            },
            {
                id: 'daily_gallery',
                title: 'Tìm lại một bức ảnh cũ',
                subtitle: 'Mở thư viện và tìm một bức ảnh đã chụp trước đó',
                Icon: ImageIcon,
            },
            {
                id: 'daily_voice',
                title: 'Dùng giọng nói thay cho bàn phím',
                subtitle: 'Thực hành nói để tìm kiếm hoặc nhập một tin nhắn',
                Icon: Mic,
            },
            {
                id: 'final_practice',
                title: 'Bài thực hành tổng hợp',
                subtitle: 'Gọi điện, nhắn Zalo, chụp ảnh, gửi ảnh và tìm đường trên bản đồ',
                Icon: Smartphone,
            },
        ],
    },
];

export const TOTAL_LESSONS = CURRICULUM.reduce(
    (total, level) => total + level.lessons.length,
    0
);