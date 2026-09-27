export interface LessonStep {
    id: string;
    type:
    | 'info'
    | 'tap'
    | 'swipe_right'
    | 'swipe_left'
    | 'swipe_up'
    | 'swipe_down';
    instruction: string;
    successMessage?: string;
    imageUrl?: any;
    videoUrl?: string;
}

export interface LessonData {
    id: string;
    title: string;
    description: string;
    steps: LessonStep[];
}

export const LESSON_DATA: Record<string, LessonData> = {
    // =========================================================
    // LEVEL 0: LÀM QUEN ĐIỆN THOẠI CẢM ỨNG
    // =========================================================

    hardware: {
        id: 'hardware',
        title: 'Nút nguồn, âm lượng & sạc pin',
        description:
            'Bác làm quen với những bộ phận quan trọng nhất của điện thoại trước nhé.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Bác hãy nhìn cạnh bên điện thoại. Thường sẽ có nút nguồn và nút tăng giảm âm lượng.',
                successMessage:
                    'Rất tốt! Đây là những nút bác sẽ dùng thường xuyên.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút nguồn trên màn hình mô phỏng để làm quen với vị trí của nút.',
                successMessage:
                    'Đúng rồi ạ! Nút nguồn dùng để bật, khóa hoặc mở màn hình.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tăng âm lượng.',
                successMessage:
                    'Chính xác! Nút này dùng để làm âm thanh lớn hơn.',
            },
            {
                id: 'step_4',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng sạc pin.',
                successMessage:
                    'Rất tốt! Khi pin yếu, bác nhớ cắm sạc đúng cách nhé.',
            },
        ],
    },

    power_on_off: {
        id: 'power_on_off',
        title: 'Bật, tắt & khởi động lại máy',
        description:
            'Bác học cách bật điện thoại và khởi động lại khi máy có vấn đề.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nút nguồn thường nằm ở cạnh bên điện thoại. Bác có thể dùng nút này để bật hoặc khóa màn hình.',
                successMessage:
                    'Bác đã biết vị trí nút nguồn rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút nguồn trên màn hình mô phỏng.',
                successMessage:
                    'Đúng rồi! Đây là thao tác cơ bản với nút nguồn.',
            },
            {
                id: 'step_3',
                type: 'info',
                instruction:
                    'Nếu điện thoại bị chậm hoặc không phản hồi, đôi khi có thể khởi động lại máy. Nếu chưa quen, bác có thể nhờ con cháu hỗ trợ.',
                successMessage:
                    'Bác nhớ rồi nhé. Khi máy có vấn đề, không cần cuống lên ạ.',
            },
        ],
    },

    battery: {
        id: 'battery',
        title: 'Xem pin còn bao nhiêu',
        description:
            'Bác học cách nhìn biểu tượng pin để biết điện thoại còn nhiều hay ít pin.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Biểu tượng viên pin thường nằm ở phía trên màn hình. Phần pin đầy càng nhiều thì điện thoại còn nhiều pin.',
                successMessage:
                    'Rất tốt! Bác đã biết chỗ xem pin.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng pin trong màn hình mô phỏng.',
                successMessage:
                    'Chính xác! Khi pin còn ít, bác nhớ sạc điện thoại.',
            },
        ],
    },

    touch_basic: {
        id: 'touch_basic',
        title: 'Chạm màn hình',
        description:
            'Bác học thao tác quan trọng nhất của điện thoại cảm ứng: chạm nhẹ vào màn hình.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Với điện thoại cảm ứng, bác không cần bấm mạnh. Chỉ cần chạm nhẹ bằng đầu ngón tay.',
                successMessage:
                    'Đúng rồi ạ! Không cần dùng lực mạnh đâu bác.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm nhẹ vào nút tròn màu xanh ở phía dưới.',
                successMessage:
                    'Rất tuyệt! Thao tác "Chạm" dùng để mở ứng dụng hoặc chọn một mục.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm nhẹ vào biểu tượng hình điện thoại.',
                successMessage:
                    'Chính xác! Bác vừa thực hiện một thao tác chạm.',
            },
        ],
    },

    swipe: {
        id: 'swipe',
        title: 'Vuốt màn hình',
        description:
            'Bác học cách vuốt màn hình để chuyển trang và xem thêm nội dung.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi muốn chuyển sang trang khác, bác đặt ngón tay lên màn hình rồi kéo nhẹ theo hướng cần đi.',
                successMessage:
                    'Bác hiểu cách vuốt rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'swipe_right',
                instruction:
                    'Bác đặt ngón tay lên màn hình và vuốt nhẹ sang phải.',
                successMessage:
                    'Đúng rồi ạ! Vuốt sang phải có thể dùng để chuyển sang nội dung bên cạnh.',
            },
            {
                id: 'step_3',
                type: 'swipe_left',
                instruction:
                    'Bây giờ bác vuốt nhẹ sang trái.',
                successMessage:
                    'Rất tốt! Bác đã biết vuốt cả hai hướng.',
            },
        ],
    },

    scroll: {
        id: 'scroll',
        title: 'Kéo và xem thêm nội dung',
        description:
            'Bác học cách kéo màn hình lên xuống để xem phần nội dung chưa nhìn thấy.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi nội dung dài hơn màn hình, bác có thể vuốt lên hoặc xuống để xem phần còn lại.',
                successMessage:
                    'Đúng rồi ạ. Mình không cần bấm nút chuyển trang.',
            },
            {
                id: 'step_2',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt từ dưới lên trên để xem phần nội dung bên dưới.',
                successMessage:
                    'Rất tốt! Bác vừa kéo màn hình lên.',
            },
            {
                id: 'step_3',
                type: 'swipe_down',
                instruction:
                    'Bây giờ bác vuốt từ trên xuống dưới để quay lại.',
                successMessage:
                    'Chính xác! Bác đã biết cách xem nội dung dài.',
            },
        ],
    },

    volume: {
        id: 'volume',
        title: 'Tăng giảm âm lượng',
        description:
            'Bác học cách điều chỉnh âm thanh để nghe điện thoại và xem video rõ hơn.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nút âm lượng thường nằm ở cạnh bên điện thoại. Bấm phía trên để tăng và phía dưới để giảm.',
                successMessage:
                    'Bác nhớ vị trí nút âm lượng rồi nhé.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tăng âm lượng trên màn hình mô phỏng.',
                successMessage:
                    'Âm thanh đã lớn hơn rồi ạ.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút giảm âm lượng.',
                successMessage:
                    'Rất tốt! Bác đã biết tăng và giảm âm lượng.',
            },
        ],
    },

    brightness: {
        id: 'brightness',
        title: 'Tăng giảm độ sáng',
        description:
            'Bác học cách làm màn hình sáng hơn hoặc tối hơn để dễ nhìn.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi ở ngoài trời, bác có thể tăng độ sáng. Khi ở nơi tối, có thể giảm độ sáng.',
                successMessage:
                    'Đúng rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng mặt trời để tăng độ sáng.',
                successMessage:
                    'Màn hình đã sáng hơn rồi ạ.',
            },
        ],
    },

    flashlight: {
        id: 'flashlight',
        title: 'Bật đèn pin',
        description:
            'Bác học cách bật đèn pin khi cần tìm đồ hoặc đi lại trong chỗ tối.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Điện thoại có thể dùng đèn flash phía sau làm đèn pin.',
                successMessage:
                    'Bác đã biết đèn pin của điện thoại dùng để làm gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng đèn pin.',
                successMessage:
                    'Đúng rồi ạ! Đèn pin đã được bật.',
            },
        ],
    },

    screen_lock: {
        id: 'screen_lock',
        title: 'Khóa và mở khóa màn hình',
        description:
            'Bác học cách khóa màn hình khi không dùng và mở lại khi cần.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi không dùng điện thoại, bác có thể khóa màn hình để tránh chạm nhầm.',
                successMessage:
                    'Rất tốt! Đây cũng là cách giúp bảo vệ điện thoại.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút nguồn trong màn hình mô phỏng.',
                successMessage:
                    'Màn hình đã được khóa.',
            },
            {
                id: 'step_3',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt từ dưới lên để mở khóa màn hình.',
                successMessage:
                    'Chính xác! Bác đã mở được màn hình.',
            },
        ],
    },

    // =========================================================
    // LEVEL 1: THAO TÁC HẰNG NGÀY
    // =========================================================

    home_screen: {
        id: 'home_screen',
        title: 'Làm quen màn hình chính',
        description:
            'Bác làm quen với màn hình chính và các biểu tượng quen thuộc.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Màn hình chính là nơi bác thường nhìn thấy sau khi mở khóa điện thoại.',
                successMessage:
                    'Đúng rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một biểu tượng ứng dụng trên màn hình.',
                successMessage:
                    'Rất tốt! Mỗi biểu tượng là một ứng dụng hoặc chức năng.',
            },
            {
                id: 'step_3',
                type: 'swipe_right',
                instruction:
                    'Bác hãy vuốt sang phải để xem một trang khác của màn hình chính.',
                successMessage:
                    'Chính xác! Điện thoại có thể có nhiều trang ứng dụng.',
            },
        ],
    },

    notification: {
        id: 'notification',
        title: 'Xem thông báo',
        description:
            'Bác học cách xem khi có tin nhắn, cuộc gọi nhỡ hoặc thông báo mới.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi có tin nhắn hoặc cuộc gọi nhỡ, điện thoại thường hiện thông báo.',
                successMessage:
                    'Bác đã hiểu thông báo là gì rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'swipe_down',
                instruction:
                    'Bác hãy vuốt từ phía trên màn hình xuống.',
                successMessage:
                    'Rất tốt! Đây là khu vực thường hiển thị các thông báo.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một thông báo.',
                successMessage:
                    'Chính xác! Chạm vào thông báo có thể mở nội dung liên quan.',
            },
        ],
    },

    wifi: {
        id: 'wifi',
        title: 'Kết nối Wi-Fi',
        description:
            'Bác học cách kết nối điện thoại với Wi-Fi ở nhà hoặc nơi quen thuộc.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Wi-Fi giúp điện thoại kết nối Internet mà không cần dùng dữ liệu di động.',
                successMessage:
                    'Bác đã hiểu Wi-Fi dùng để làm gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng Wi-Fi.',
                successMessage:
                    'Đúng rồi ạ! Bây giờ có thể chọn mạng Wi-Fi.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào tên mạng Wi-Fi quen thuộc.',
                successMessage:
                    'Rất tốt! Khi được hỏi mật khẩu, bác nhập mật khẩu Wi-Fi hoặc nhờ người thân hỗ trợ.',
            },
        ],
    },

    mobile_data: {
        id: 'mobile_data',
        title: 'Bật tắt dữ liệu di động',
        description:
            'Bác làm quen với dữ liệu di động 4G/5G.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi không có Wi-Fi, điện thoại có thể dùng dữ liệu di động từ SIM để vào Internet.',
                successMessage:
                    'Đúng rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'swipe_down',
                instruction:
                    'Bác hãy vuốt từ phía trên màn hình xuống để mở bảng điều khiển nhanh.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng dữ liệu di động.',
                successMessage:
                    'Bác đã biết chỗ bật tắt dữ liệu di động rồi ạ.',
            },
        ],
    },

    keyboard_basic: {
        id: 'keyboard_basic',
        title: 'Làm quen bàn phím',
        description:
            'Bác học cách nhập chữ và số trên bàn phím cảm ứng.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi cần nhập chữ, bàn phím sẽ xuất hiện ở phía dưới màn hình.',
                successMessage:
                    'Bác đã biết bàn phím nằm ở đâu.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một chữ cái trên bàn phím.',
                successMessage:
                    'Đúng rồi! Mỗi lần chạm sẽ nhập một chữ.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào phím khoảng trắng.',
                successMessage:
                    'Rất tốt! Phím này dùng để tạo khoảng cách giữa các từ.',
            },
        ],
    },

    voice_typing: {
        id: 'voice_typing',
        title: 'Nói để điện thoại viết',
        description:
            'Bác học cách dùng giọng nói để nhập tiếng Việt thay vì gõ từng chữ.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Ở một số bàn phím có biểu tượng micro. Bác có thể bấm vào đó rồi nói.',
                successMessage:
                    'Rất tiện phải không ạ?',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng micro.',
                successMessage:
                    'Bây giờ điện thoại đang chờ bác nói.',
            },
            {
                id: 'step_3',
                type: 'info',
                instruction:
                    'Bác nói chậm và rõ ràng. Điện thoại sẽ cố gắng chuyển lời nói thành chữ.',
                successMessage:
                    'Bác đã biết một cách nhập chữ rất tiện lợi.',
            },
        ],
    },

    copy_text: {
        id: 'copy_text',
        title: 'Chọn và sao chép chữ',
        description:
            'Bác học thao tác sao chép một đoạn chữ đơn giản.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Một số đoạn chữ có thể được chọn rồi sao chép để dùng lại ở nơi khác.',
                successMessage:
                    'Bác đã hiểu cách sao chép chữ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào đoạn chữ cần chọn.',
                successMessage:
                    'Đúng rồi ạ! Khi chọn được chữ, điện thoại sẽ hiện các tùy chọn.',
            },
        ],
    },

    share_basic: {
        id: 'share_basic',
        title: 'Chia sẻ ảnh và thông tin',
        description:
            'Bác học cách gửi một nội dung cho người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nút Chia sẻ thường có hình mũi tên hoặc ba chấm nối với nhau.',
                successMessage:
                    'Bác đã biết biểu tượng chia sẻ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chia sẻ.',
                successMessage:
                    'Rất tốt! Điện thoại sẽ cho bác chọn ứng dụng để gửi.',
            },
        ],
    },

    delete_basic: {
        id: 'delete_basic',
        title: 'Xóa và khôi phục thao tác',
        description:
            'Bác học cách xóa một nội dung không cần thiết.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nút xóa thường có hình thùng rác. Trước khi xóa, bác nên kiểm tra lại nội dung.',
                successMessage:
                    'Đúng rồi ạ. Mình không nên xóa vội.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng thùng rác.',
                successMessage:
                    'Bác đã biết thao tác xóa.',
            },
        ],
    },

    // =========================================================
    // LEVEL 2: NGHE GỌI & DANH BẠ
    // =========================================================

    call_basic: {
        id: 'call_basic',
        title: 'Nghe và gọi điện thoại',
        description:
            'Bác học cách nghe máy, gọi cho người thân và kết thúc cuộc gọi.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi có người gọi, màn hình thường hiện tên hoặc số điện thoại của người gọi.',
                successMessage:
                    'Bác đã biết cách nhận biết cuộc gọi đến.',
            },
            {
                id: 'step_2',
                type: 'swipe_right',
                instruction:
                    'Bác hãy vuốt sang phải trên nút nghe màu xanh để nhận cuộc gọi.',
                successMessage:
                    'Chính xác! Bác đã nghe máy.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Khi muốn kết thúc cuộc gọi, bác hãy chạm vào nút màu đỏ.',
                successMessage:
                    'Rất tốt! Bác đã kết thúc cuộc gọi.',
            },
        ],
    },

    call_missed: {
        id: 'call_missed',
        title: 'Xem cuộc gọi nhỡ',
        description:
            'Bác học cách xem ai vừa gọi khi mình không kịp nghe máy.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu bác không nghe máy, điện thoại thường lưu lại cuộc gọi nhỡ.',
                successMessage:
                    'Đúng rồi ạ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng điện thoại.',
                successMessage:
                    'Rất tốt! Bây giờ bác có thể xem danh sách cuộc gọi.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một cuộc gọi nhỡ.',
                successMessage:
                    'Chính xác! Bác có thể xem người đã gọi và gọi lại nếu cần.',
            },
        ],
    },

    contacts: {
        id: 'contacts',
        title: 'Mở danh bạ',
        description:
            'Bác học cách tìm số điện thoại của người thân đã lưu.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng Danh bạ.',
                successMessage:
                    'Rất tốt! Đây là nơi lưu số điện thoại của người quen.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào tên một người thân.',
                successMessage:
                    'Đúng rồi ạ! Bác có thể xem thông tin và gọi cho người đó.',
            },
        ],
    },

    save_contact: {
        id: 'save_contact',
        title: 'Lưu số người thân',
        description:
            'Bác học cách lưu số điện thoại của con cháu vào danh bạ.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút thêm liên hệ mới.',
                successMessage:
                    'Rất tốt! Bây giờ mình có thể nhập thông tin.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô nhập tên.',
                successMessage:
                    'Bác có thể nhập tên người thân ở đây.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô số điện thoại.',
                successMessage:
                    'Đúng rồi! Sau đó nhập số điện thoại.',
            },
            {
                id: 'step_4',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Lưu.',
                successMessage:
                    'Tuyệt vời! Số điện thoại đã được lưu vào danh bạ.',
            },
        ],
    },

    edit_contact: {
        id: 'edit_contact',
        title: 'Sửa thông tin liên hệ',
        description:
            'Bác học cách cập nhật tên hoặc số điện thoại đã lưu.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở một người trong danh bạ.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Sửa.',
                successMessage:
                    'Bây giờ bác có thể thay đổi thông tin.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Sau khi sửa xong, bác hãy chạm vào nút Lưu.',
                successMessage:
                    'Chính xác! Thông tin mới đã được lưu.',
            },
        ],
    },

    favorite_contact: {
        id: 'favorite_contact',
        title: 'Đưa người thân vào mục yêu thích',
        description:
            'Bác học cách đưa người thường xuyên liên lạc vào mục gọi nhanh.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở thông tin của một người thân.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng ngôi sao hoặc mục yêu thích.',
                successMessage:
                    'Đúng rồi! Người này có thể được gọi nhanh hơn.',
            },
        ],
    },

    call_from_contact: {
        id: 'call_from_contact',
        title: 'Gọi từ danh bạ',
        description:
            'Bác học cách gọi người thân mà không cần nhớ số điện thoại.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Danh bạ.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào tên người muốn gọi.',
                successMessage:
                    'Đúng rồi ạ.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gọi.',
                successMessage:
                    'Chính xác! Điện thoại đang gọi cho người thân.',
            },
        ],
    },

    speaker_call: {
        id: 'speaker_call',
        title: 'Bật loa ngoài khi gọi',
        description:
            'Bác học cách bật loa ngoài để nghe rõ hơn trong cuộc gọi.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Trong cuộc gọi thường có nút Loa ngoài. Khi bật, âm thanh sẽ phát ra loa lớn hơn.',
                successMessage:
                    'Bác đã biết nút loa ngoài.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng loa.',
                successMessage:
                    'Rất tốt! Loa ngoài đã được bật.',
            },
        ],
    },

    mute_call: {
        id: 'mute_call',
        title: 'Tắt tiếng khi đang gọi',
        description:
            'Bác học cách tạm thời tắt micro trong lúc gọi.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nút micro dùng để tắt hoặc bật tiếng của bác trong cuộc gọi.',
                successMessage:
                    'Bác đã biết nút micro.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng micro.',
                successMessage:
                    'Micro đã được tắt. Người bên kia sẽ tạm thời không nghe thấy bác.',
            },
        ],
    },

    emergency_call: {
        id: 'emergency_call',
        title: 'Gọi số khẩn cấp',
        description:
            'Bác làm quen với việc gọi trợ giúp trong trường hợp khẩn cấp.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Trong tình huống nguy hiểm hoặc cần trợ giúp khẩn cấp, bác cần biết số điện thoại phù hợp và gọi khi thật sự cần.',
                successMessage:
                    'Bác nhớ nhé: chỉ gọi số khẩn cấp khi có tình huống cần trợ giúp.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng gọi trong màn hình mô phỏng.',
                successMessage:
                    'Bác đã biết cách bắt đầu một cuộc gọi.',
            },
        ],
    },

    // =========================================================
    // LEVEL 3: ZALO
    // =========================================================

    zalo_open: {
        id: 'zalo_open',
        title: 'Mở và làm quen Zalo',
        description:
            'Bác học cách tìm và mở ứng dụng Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Zalo là ứng dụng được nhiều người Việt Nam dùng để nhắn tin, gọi điện và gửi ảnh.',
                successMessage:
                    'Bác đã biết Zalo dùng để làm gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng Zalo.',
                successMessage:
                    'Rất tốt! Bác đã mở được Zalo.',
            },
        ],
    },

    zalo_contacts: {
        id: 'zalo_contacts',
        title: 'Tìm người thân trên Zalo',
        description:
            'Bác học cách tìm người thân để bắt đầu trò chuyện.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở danh sách bạn bè hoặc cuộc trò chuyện.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào tên người thân muốn nói chuyện.',
                successMessage:
                    'Đúng rồi ạ! Bây giờ bác có thể nhắn tin hoặc gọi.',
            },
        ],
    },

    zalo_message: {
        id: 'zalo_message',
        title: 'Nhắn tin Zalo',
        description:
            'Bác học cách gửi một tin nhắn đơn giản cho người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô nhập tin nhắn ở phía dưới.',
                successMessage:
                    'Rất tốt! Bàn phím sẽ hiện lên.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy nhập một lời nhắn ngắn.',
                successMessage:
                    'Bác đã nhập được tin nhắn.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gửi.',
                successMessage:
                    'Tuyệt vời! Tin nhắn đã được gửi.',
            },
        ],
    },

    zalo_voice: {
        id: 'zalo_voice',
        title: 'Gửi tin nhắn bằng giọng nói',
        description:
            'Bác học cách gửi lời nói thay vì phải gõ bàn phím.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Trong Zalo, bác có thể gửi tin nhắn thoại bằng cách dùng biểu tượng micro.',
                successMessage:
                    'Rất tiện phải không ạ?',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm và giữ nút micro rồi nói một câu ngắn.',
                successMessage:
                    'Bác đã ghi âm được lời nhắn.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy thả tay để gửi tin nhắn thoại.',
                successMessage:
                    'Rất tốt! Người thân đã có thể nghe lời nhắn của bác.',
            },
        ],
    },

    zalo_photo: {
        id: 'zalo_photo',
        title: 'Gửi ảnh qua Zalo',
        description:
            'Bác học cách chọn một bức ảnh trong điện thoại và gửi cho người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng hình ảnh trong cuộc trò chuyện.',
                successMessage:
                    'Rất tốt! Điện thoại đang mở thư viện ảnh.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một bức ảnh muốn gửi.',
                successMessage:
                    'Bác đã chọn ảnh.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gửi.',
                successMessage:
                    'Tuyệt vời! Bức ảnh đã được gửi cho người thân.',
            },
        ],
    },

    zalo_camera: {
        id: 'zalo_camera',
        title: 'Chụp ảnh và gửi ngay trên Zalo',
        description:
            'Bác học cách mở camera ngay trong cuộc trò chuyện để chụp ảnh.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng camera.',
                successMessage:
                    'Rất tốt! Camera đã được mở.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tròn để chụp ảnh.',
                successMessage:
                    'Đẹp lắm ạ! Bác đã chụp được ảnh.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút gửi ảnh.',
                successMessage:
                    'Tuyệt vời! Ảnh đã được gửi.',
            },
        ],
    },

    zalo_video_call: {
        id: 'zalo_video_call',
        title: 'Gọi video cho người thân',
        description:
            'Bác học cách gọi video để vừa nói chuyện vừa nhìn thấy người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở cuộc trò chuyện với người thân.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng camera để gọi video.',
                successMessage:
                    'Đúng rồi ạ! Điện thoại đang thực hiện cuộc gọi video.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Khi muốn kết thúc, bác hãy chạm vào nút màu đỏ.',
                successMessage:
                    'Rất tốt! Bác đã kết thúc cuộc gọi video.',
            },
        ],
    },

    zalo_receive_photo: {
        id: 'zalo_receive_photo',
        title: 'Nhận và xem ảnh người thân gửi',
        description:
            'Bác học cách mở ảnh được người thân gửi qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở cuộc trò chuyện có ảnh mới.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào bức ảnh được gửi.',
                successMessage:
                    'Đúng rồi! Bác đã mở được ảnh.',
            },
        ],
    },

    zalo_receive_voice: {
        id: 'zalo_receive_voice',
        title: 'Nghe tin nhắn thoại',
        description:
            'Bác học cách nghe lời nhắn bằng giọng nói từ người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút phát trên tin nhắn thoại.',
                successMessage:
                    'Rất tốt! Bác đang nghe lời nhắn.',
            },
        ],
    },

    zalo_group: {
        id: 'zalo_group',
        title: 'Làm quen nhóm gia đình',
        description:
            'Bác học cách đọc và gửi tin nhắn trong nhóm gia đình.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở nhóm gia đình.',
                successMessage:
                    'Rất tốt! Đây là nơi nhiều người thân có thể cùng trò chuyện.',
            },
            {
                id: 'step_2',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt lên để xem những tin nhắn cũ hơn.',
                successMessage:
                    'Chính xác! Bác có thể kéo lên để xem lại nội dung.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô nhập tin nhắn và gửi một lời chào.',
                successMessage:
                    'Tuyệt vời! Bác đã biết cách trò chuyện trong nhóm gia đình.',
            },
        ],
    },

    // =========================================================
    // LEVEL 4: CAMERA
    // =========================================================

    camera_open: {
        id: 'camera_open',
        title: 'Mở camera',
        description:
            'Bác học cách tìm và mở camera trên điện thoại.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng camera.',
                successMessage:
                    'Rất tốt! Camera đã được mở.',
            },
        ],
    },

    take_photo: {
        id: 'take_photo',
        title: 'Chụp một bức ảnh',
        description:
            'Bác học cách chụp một bức ảnh đơn giản.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Bác cầm điện thoại chắc tay và hướng camera về phía muốn chụp.',
                successMessage:
                    'Bác chuẩn bị rất tốt.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tròn lớn để chụp ảnh.',
                successMessage:
                    'Tuyệt vời! Bác đã chụp được một bức ảnh.',
            },
        ],
    },

    selfie: {
        id: 'selfie',
        title: 'Chụp ảnh selfie',
        description:
            'Bác học cách chuyển sang camera trước để tự chụp ảnh.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng đổi camera.',
                successMessage:
                    'Đúng rồi! Camera trước đã được bật.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tròn để chụp ảnh.',
                successMessage:
                    'Rất tốt! Bác đã chụp được ảnh selfie.',
            },
        ],
    },

    camera_zoom: {
        id: 'camera_zoom',
        title: 'Phóng to và thu nhỏ khi chụp',
        description:
            'Bác làm quen với thao tác phóng to và thu nhỏ hình ảnh.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Một số điện thoại cho phép dùng hai ngón tay để phóng to hoặc thu nhỏ hình ảnh.',
                successMessage:
                    'Bác đã hiểu cách phóng to.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút phóng to trong màn hình mô phỏng.',
                successMessage:
                    'Hình ảnh đã được phóng to.',
            },
        ],
    },

    camera_flash: {
        id: 'camera_flash',
        title: 'Bật tắt đèn flash',
        description:
            'Bác học cách bật hoặc tắt đèn flash khi chụp ảnh.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng tia chớp.',
                successMessage:
                    'Đúng rồi! Đây là nút điều khiển đèn flash.',
            },
        ],
    },

    view_photo: {
        id: 'view_photo',
        title: 'Xem lại ảnh vừa chụp',
        description:
            'Bác học cách mở bức ảnh vừa chụp.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào hình thu nhỏ của bức ảnh vừa chụp.',
                successMessage:
                    'Rất tốt! Bác đã mở được ảnh.',
            },
        ],
    },

    view_gallery: {
        id: 'view_gallery',
        title: 'Mở thư viện ảnh',
        description:
            'Bác học cách xem những bức ảnh đã lưu trong điện thoại.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ứng dụng Thư viện hoặc Ảnh.',
                successMessage:
                    'Rất tốt! Đây là nơi lưu những bức ảnh của bác.',
            },
            {
                id: 'step_2',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt lên để xem thêm các bức ảnh.',
                successMessage:
                    'Chính xác! Bác đã biết cách xem thêm ảnh.',
            },
        ],
    },

    delete_photo: {
        id: 'delete_photo',
        title: 'Xóa ảnh không cần thiết',
        description:
            'Bác học cách xóa ảnh bị mờ hoặc chụp nhầm.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở một bức ảnh không cần giữ lại.',
                successMessage:
                    'Bác đã chọn đúng ảnh.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng thùng rác.',
                successMessage:
                    'Ảnh đã được đưa vào mục xóa.',
            },
        ],
    },

    share_photo: {
        id: 'share_photo',
        title: 'Gửi ảnh cho người thân',
        description:
            'Bác học cách gửi một bức ảnh qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở một bức ảnh muốn gửi.',
                successMessage:
                    'Rất tốt!',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chia sẻ.',
                successMessage:
                    'Bác đã mở danh sách ứng dụng có thể gửi ảnh.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn Zalo.',
                successMessage:
                    'Rất tốt! Bây giờ bác có thể chọn người thân để gửi ảnh.',
            },
        ],
    },

    photo_video: {
        id: 'photo_video',
        title: 'Chụp ảnh và quay video',
        description:
            'Bác phân biệt hai chế độ chụp ảnh và quay video.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Camera thường có các chế độ như Ảnh và Video. Bác chọn đúng chế độ trước khi bấm nút chụp.',
                successMessage:
                    'Bác đã hiểu sự khác nhau.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào chữ Video.',
                successMessage:
                    'Đúng rồi! Bây giờ camera đang ở chế độ quay video.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút quay.',
                successMessage:
                    'Rất tốt! Bác đã bắt đầu quay video.',
            },
        ],
    },

    // =========================================================
    // LEVEL 5: YOUTUBE
    // =========================================================

    youtube_open: {
        id: 'youtube_open',
        title: 'Mở YouTube',
        description:
            'Bác học cách tìm và mở ứng dụng YouTube.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy tìm biểu tượng YouTube trên màn hình và chạm vào đó.',
                successMessage:
                    'Rất tốt! Bác đã mở được YouTube.',
            },
        ],
    },

    youtube_search: {
        id: 'youtube_search',
        title: 'Tìm video bằng ô tìm kiếm',
        description:
            'Bác học cách tìm một video mình muốn xem.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô tìm kiếm ở phía trên.',
                successMessage:
                    'Bây giờ bác có thể nhập nội dung muốn tìm.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy nhập tên một bài hát hoặc chương trình bác muốn xem.',
                successMessage:
                    'Rất tốt! Bác đã nhập nội dung tìm kiếm.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tìm kiếm.',
                successMessage:
                    'Chính xác! YouTube đang tìm video cho bác.',
            },
        ],
    },

    youtube_voice_search: {
        id: 'youtube_voice_search',
        title: 'Tìm video bằng giọng nói',
        description:
            'Bác học cách nói thay vì phải gõ tên video.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng micro trong ô tìm kiếm.',
                successMessage:
                    'Rất tốt! Điện thoại đang chờ bác nói.',
            },
            {
                id: 'step_2',
                type: 'info',
                instruction:
                    'Bác nói chậm và rõ tên bài hát hoặc nội dung muốn tìm.',
                successMessage:
                    'Bác đã biết cách tìm video bằng giọng nói.',
            },
        ],
    },

    youtube_play: {
        id: 'youtube_play',
        title: 'Phát và tạm dừng video',
        description:
            'Bác học cách xem và tạm dừng video.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một video muốn xem.',
                successMessage:
                    'Video đã được mở.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào giữa màn hình video để tạm dừng.',
                successMessage:
                    'Đúng rồi! Video đã tạm dừng.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm lại vào nút Play để xem tiếp.',
                successMessage:
                    'Rất tốt! Video đã phát lại.',
            },
        ],
    },

    youtube_volume: {
        id: 'youtube_volume',
        title: 'Điều chỉnh âm thanh khi xem',
        description:
            'Bác học cách điều chỉnh âm lượng khi xem video.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút tăng âm lượng.',
                successMessage:
                    'Âm thanh đã lớn hơn.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút giảm âm lượng.',
                successMessage:
                    'Rất tốt! Bác đã biết điều chỉnh âm thanh.',
            },
        ],
    },

    youtube_fullscreen: {
        id: 'youtube_fullscreen',
        title: 'Xem video toàn màn hình',
        description:
            'Bác học cách phóng video lớn hơn để dễ nhìn.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng toàn màn hình trên video.',
                successMessage:
                    'Rất tốt! Video đã được phóng lớn.',
            },
        ],
    },

    youtube_subscribe: {
        id: 'youtube_subscribe',
        title: 'Theo dõi kênh quen thuộc',
        description:
            'Bác học cách đăng ký theo dõi một kênh YouTube.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu bác thích một kênh, có thể đăng ký để dễ tìm lại các video mới.',
                successMessage:
                    'Bác đã hiểu mục Đăng ký.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Đăng ký.',
                successMessage:
                    'Rất tốt! Bác đã biết cách theo dõi một kênh.',
            },
        ],
    },

    youtube_history: {
        id: 'youtube_history',
        title: 'Tìm lại video đã xem',
        description:
            'Bác học cách tìm lại video đã xem trước đó.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở mục video đã xem hoặc lịch sử.',
                successMessage:
                    'Rất tốt! Đây là nơi có thể tìm lại những video đã xem.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một video trong danh sách.',
                successMessage:
                    'Đúng rồi! Bác đã mở lại video cũ.',
            },
        ],
    },

    youtube_share: {
        id: 'youtube_share',
        title: 'Gửi video cho người thân',
        description:
            'Bác học cách gửi một video YouTube cho con cháu qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chia sẻ bên dưới video.',
                successMessage:
                    'Rất tốt! Bác đã mở danh sách cách chia sẻ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn Zalo.',
                successMessage:
                    'Bây giờ bác có thể chọn người thân để gửi video.',
            },
        ],
    },

    youtube_safe: {
        id: 'youtube_safe',
        title: 'Nhận biết video và quảng cáo',
        description:
            'Bác học cách tránh bấm nhầm vào quảng cáo hoặc nội dung không mong muốn.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi xem YouTube, đôi lúc bác sẽ thấy quảng cáo. Không phải nút nào trên màn hình cũng là video.',
                successMessage:
                    'Bác nhớ quan sát kỹ trước khi chạm nhé.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút đóng quảng cáo trong màn hình mô phỏng.',
                successMessage:
                    'Rất tốt! Bác đã biết cách đóng một quảng cáo.',
            },
        ],
    },

    // =========================================================
    // LEVEL 6: BẢN ĐỒ & ĐI LẠI
    // =========================================================

    maps_open: {
        id: 'maps_open',
        title: 'Mở Google Maps',
        description:
            'Bác học cách tìm và mở ứng dụng bản đồ trên điện thoại.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Google Maps là ứng dụng giúp bác tìm địa điểm và xem đường đi.',
                successMessage:
                    'Bác đã biết Google Maps dùng để làm gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy tìm và chạm vào biểu tượng Google Maps.',
                successMessage:
                    'Rất tốt! Bác đã mở được Google Maps.',
            },
        ],
    },

    maps_location: {
        id: 'maps_location',
        title: 'Xem vị trí hiện tại',
        description:
            'Bác học cách nhận biết vị trí hiện tại của mình trên bản đồ.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Trên bản đồ, vị trí hiện tại thường được đánh dấu bằng một chấm màu xanh.',
                successMessage:
                    'Bác đã biết chấm xanh trên bản đồ có ý nghĩa gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút vị trí hiện tại trên bản đồ.',
                successMessage:
                    'Rất tốt! Bản đồ đang hiển thị vị trí hiện tại của bác.',
            },
        ],
    },

    maps_search: {
        id: 'maps_search',
        title: 'Tìm một địa điểm',
        description:
            'Bác học cách tìm bệnh viện, chợ, siêu thị hoặc địa chỉ người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô tìm kiếm ở phía trên bản đồ.',
                successMessage:
                    'Rất tốt! Bây giờ bác có thể nhập địa điểm muốn tìm.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy nhập tên một địa điểm, ví dụ bệnh viện, chợ hoặc siêu thị.',
                successMessage:
                    'Bác đã nhập được địa điểm cần tìm.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào kết quả phù hợp trong danh sách.',
                successMessage:
                    'Chính xác! Bác đã tìm được địa điểm.',
            },
        ],
    },

    maps_voice_search: {
        id: 'maps_voice_search',
        title: 'Tìm địa điểm bằng giọng nói',
        description:
            'Bác học cách nói tên địa điểm thay vì gõ bàn phím.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng micro trong ô tìm kiếm.',
                successMessage:
                    'Rất tốt! Điện thoại đang chờ bác nói.',
            },
            {
                id: 'step_2',
                type: 'info',
                instruction:
                    'Bác nói chậm và rõ tên địa điểm muốn tìm.',
                successMessage:
                    'Bác đã biết cách tìm địa điểm bằng giọng nói.',
            },
        ],
    },

    maps_directions: {
        id: 'maps_directions',
        title: 'Xem đường đi',
        description:
            'Bác học cách chọn điểm đến và xem hướng di chuyển trên bản đồ.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy tìm và chọn một địa điểm muốn đến.',
                successMessage:
                    'Rất tốt! Bác đã chọn được điểm đến.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chỉ đường.',
                successMessage:
                    'Đúng rồi ạ! Bản đồ đang hiển thị các tuyến đường.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn một tuyến đường phù hợp.',
                successMessage:
                    'Rất tốt! Bác đã biết cách xem đường đi.',
            },
        ],
    },

    maps_walk: {
        id: 'maps_walk',
        title: 'Xem đường đi bộ',
        description:
            'Bác học cách xem hướng dẫn khi đi bộ đến một địa điểm gần đó.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chọn một địa điểm gần đó và chạm vào Chỉ đường.',
                successMessage:
                    'Rất tốt! Bác đã mở phần hướng dẫn đường đi.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn biểu tượng người đi bộ.',
                successMessage:
                    'Đúng rồi ạ! Bản đồ đang hiển thị đường đi bộ.',
            },
        ],
    },

    maps_car: {
        id: 'maps_car',
        title: 'Xem đường đi bằng ô tô hoặc xe máy',
        description:
            'Bác học cách xem tuyến đường và thời gian di chuyển dự kiến.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chọn một địa điểm muốn đến và mở phần Chỉ đường.',
                successMessage:
                    'Rất tốt! Bác đã chọn được điểm đến.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn chế độ di chuyển bằng ô tô.',
                successMessage:
                    'Đúng rồi ạ! Bản đồ đang hiển thị tuyến đường và thời gian dự kiến.',
            },
        ],
    },

    maps_share: {
        id: 'maps_share',
        title: 'Gửi vị trí cho người thân',
        description:
            'Bác học cách chia sẻ địa điểm hoặc vị trí hiện tại qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở địa điểm muốn chia sẻ trên bản đồ.',
                successMessage:
                    'Rất tốt! Bác đã mở thông tin địa điểm.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chia sẻ.',
                successMessage:
                    'Bác đã mở danh sách ứng dụng có thể chia sẻ.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn Zalo để gửi vị trí cho người thân.',
                successMessage:
                    'Tuyệt vời! Bác đã biết cách gửi vị trí.',
            },
        ],
    },

    maps_save: {
        id: 'maps_save',
        title: 'Lưu địa điểm quen thuộc',
        description:
            'Bác học cách lưu những nơi thường đến như nhà, bệnh viện hoặc chợ.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy tìm và mở một địa điểm quen thuộc.',
                successMessage:
                    'Rất tốt! Bác đã chọn được địa điểm.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Lưu.',
                successMessage:
                    'Đúng rồi ạ! Địa điểm đã được lưu để bác dễ tìm lại.',
            },
        ],
    },

    maps_practice: {
        id: 'maps_practice',
        title: 'Thực hành tìm đường',
        description:
            'Bác thực hành tự tìm đường từ nhà đến một địa điểm quen thuộc.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Google Maps và tìm một địa điểm quen thuộc.',
                successMessage:
                    'Rất tốt! Bác đã tìm được địa điểm.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Chỉ đường.',
                successMessage:
                    'Bác đã mở được hướng dẫn đường đi.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn tuyến đường phù hợp để xem hướng dẫn.',
                successMessage:
                    'Tuyệt vời! Bác đã hoàn thành bài thực hành tìm đường.',
            },
        ],
    },

    // =========================================================
    // LEVEL 7: CÀI ĐẶT & QUẢN LÝ ĐIỆN THOẠI
    // =========================================================

    settings_basic: {
        id: 'settings_basic',
        title: 'Mở phần Cài đặt',
        description:
            'Bác học cách tìm và làm quen với các mục cài đặt quan trọng.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy tìm và chạm vào biểu tượng Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã mở được phần Cài đặt.',
            },
            {
                id: 'step_2',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt lên xuống để xem các mục cài đặt.',
                successMessage:
                    'Đúng rồi ạ! Trong Cài đặt có nhiều chức năng để quản lý điện thoại.',
            },
        ],
    },

    wifi_settings: {
        id: 'wifi_settings',
        title: 'Quản lý Wi-Fi',
        description:
            'Bác học cách kết nối, ngắt kết nối và chọn mạng Wi-Fi quen thuộc.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở mục Wi-Fi trong phần Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã mở phần quản lý Wi-Fi.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một mạng Wi-Fi quen thuộc.',
                successMessage:
                    'Đúng rồi ạ! Bác có thể kết nối với mạng Wi-Fi này.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào công tắc Wi-Fi để bật hoặc tắt.',
                successMessage:
                    'Rất tốt! Bác đã biết cách quản lý Wi-Fi.',
            },
        ],
    },

    bluetooth: {
        id: 'bluetooth',
        title: 'Làm quen Bluetooth',
        description:
            'Bác học Bluetooth dùng để kết nối với thiết bị gần đó.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Bluetooth giúp điện thoại kết nối không dây với một số thiết bị ở gần.',
                successMessage:
                    'Bác đã hiểu Bluetooth dùng để làm gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào mục Bluetooth trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã tìm được phần Bluetooth.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào công tắc Bluetooth để bật hoặc tắt.',
                successMessage:
                    'Đúng rồi ạ! Bác đã biết cách bật tắt Bluetooth.',
            },
        ],
    },

    ringtone: {
        id: 'ringtone',
        title: 'Đổi âm thanh cuộc gọi',
        description:
            'Bác học cách chọn nhạc chuông và điều chỉnh âm lượng cuộc gọi.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở mục Âm thanh trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã mở được phần cài đặt âm thanh.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào mục Nhạc chuông.',
                successMessage:
                    'Bác có thể chọn âm thanh cuộc gọi ở đây.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn một nhạc chuông quen thuộc.',
                successMessage:
                    'Tuyệt vời! Bác đã biết cách chọn nhạc chuông.',
            },
        ],
    },

    font_size: {
        id: 'font_size',
        title: 'Tăng kích thước chữ',
        description:
            'Bác học cách chỉnh chữ lớn hơn để dễ đọc.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở mục Màn hình hoặc Kích thước chữ trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã tìm được phần chỉnh kích thước chữ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn kích thước chữ lớn hơn.',
                successMessage:
                    'Đúng rồi ạ! Chữ trên màn hình đã dễ nhìn hơn.',
            },
        ],
    },

    screen_timeout: {
        id: 'screen_timeout',
        title: 'Chỉnh thời gian tắt màn hình',
        description:
            'Bác học cách điều chỉnh thời gian màn hình tự tắt khi không sử dụng.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở mục Màn hình trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã mở được phần cài đặt màn hình.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy tìm mục Thời gian chờ hoặc Tắt màn hình.',
                successMessage:
                    'Đúng rồi ạ! Đây là nơi điều chỉnh thời gian màn hình tự tắt.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn một khoảng thời gian phù hợp.',
                successMessage:
                    'Rất tốt! Bác đã biết cách chỉnh thời gian tắt màn hình.',
            },
        ],
    },

    app_install: {
        id: 'app_install',
        title: 'Cài ứng dụng từ CH Play',
        description:
            'Bác học cách tìm và cài một ứng dụng quen thuộc từ kho ứng dụng.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở ứng dụng CH Play.',
                successMessage:
                    'Rất tốt! Đây là nơi bác có thể tìm ứng dụng.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô tìm kiếm và nhập tên ứng dụng.',
                successMessage:
                    'Bác đã tìm được ứng dụng cần cài.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Cài đặt.',
                successMessage:
                    'Rất tốt! Ứng dụng đang được cài đặt.',
            },
        ],
    },

    app_delete: {
        id: 'app_delete',
        title: 'Gỡ ứng dụng không cần thiết',
        description:
            'Bác học cách xóa ứng dụng không dùng để điện thoại gọn gàng hơn.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Trước khi gỡ ứng dụng, bác nên chắc chắn đó là ứng dụng mình không còn cần dùng.',
                successMessage:
                    'Đúng rồi ạ. Mình nên kiểm tra trước khi xóa.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy mở phần thông tin của ứng dụng muốn gỡ.',
                successMessage:
                    'Rất tốt! Bác đã chọn ứng dụng cần kiểm tra.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gỡ cài đặt.',
                successMessage:
                    'Bác đã biết cách gỡ một ứng dụng không cần thiết.',
            },
        ],
    },

    storage: {
        id: 'storage',
        title: 'Kiểm tra bộ nhớ',
        description:
            'Bác học cách biết khi nào điện thoại gần đầy ảnh, video hoặc ứng dụng.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở phần Bộ nhớ trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã tìm được thông tin về bộ nhớ.',
            },
            {
                id: 'step_2',
                type: 'info',
                instruction:
                    'Nếu bộ nhớ gần đầy, bác có thể cần xóa bớt ảnh, video hoặc ứng dụng không cần thiết.',
                successMessage:
                    'Bác đã biết cách nhận biết khi điện thoại gần đầy bộ nhớ.',
            },
        ],
    },

    software_update: {
        id: 'software_update',
        title: 'Cập nhật điện thoại',
        description:
            'Bác học cách nhận biết thông báo cập nhật và biết khi nào cần nhờ người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Điện thoại đôi khi sẽ thông báo có bản cập nhật mới.',
                successMessage:
                    'Bác đã biết cập nhật điện thoại là gì.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy mở phần Cập nhật phần mềm trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã tìm được nơi kiểm tra cập nhật.',
            },
            {
                id: 'step_3',
                type: 'info',
                instruction:
                    'Nếu chưa quen, bác có thể nhờ con cháu kiểm tra trước khi cập nhật.',
                successMessage:
                    'Đúng rồi ạ. Khi chưa chắc chắn, bác có thể nhờ người thân hỗ trợ.',
            },
        ],
    },

    // =========================================================
    // LEVEL 8: AN TOÀN & TRÁNH LỪA ĐẢO TRÊN ĐIỆN THOẠI
    // =========================================================

    screen_lock_security: {
        id: 'screen_lock_security',
        title: 'Đặt khóa màn hình',
        description:
            'Bác học cách dùng mã PIN hoặc cách khóa màn hình phù hợp để bảo vệ điện thoại.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khóa màn hình giúp người khác khó mở điện thoại khi bác không sử dụng.',
                successMessage:
                    'Bác đã hiểu vì sao nên khóa màn hình.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy mở phần Bảo mật hoặc Khóa màn hình trong Cài đặt.',
                successMessage:
                    'Rất tốt! Bác đã tìm được phần cài đặt khóa màn hình.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn cách khóa phù hợp, chẳng hạn như mã PIN.',
                successMessage:
                    'Đúng rồi ạ! Bác đã biết cách bảo vệ điện thoại bằng khóa màn hình.',
            },
        ],
    },

    unknown_call: {
        id: 'unknown_call',
        title: 'Xử lý cuộc gọi từ số lạ',
        description:
            'Bác học cách bình tĩnh khi nhận cuộc gọi từ người không quen.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Khi có số lạ gọi đến, bác không cần vội cung cấp thông tin cá nhân hoặc làm theo yêu cầu của người gọi.',
                successMessage:
                    'Đúng rồi ạ. Bác cứ bình tĩnh kiểm tra trước.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn thao tác kết thúc cuộc gọi nếu không muốn tiếp tục nói chuyện.',
                successMessage:
                    'Rất tốt! Bác có thể kết thúc cuộc gọi khi thấy không yên tâm.',
            },
        ],
    },

    spam_message: {
        id: 'spam_message',
        title: 'Nhận biết tin nhắn đáng ngờ',
        description:
            'Bác học cách cẩn thận với tin nhắn yêu cầu cung cấp thông tin hoặc bấm liên kết.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Hãy cẩn thận với tin nhắn lạ yêu cầu cung cấp thông tin cá nhân, mật khẩu hoặc tiền.',
                successMessage:
                    'Bác đã biết một dấu hiệu đáng ngờ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn tin nhắn đáng ngờ trong màn hình mô phỏng.',
                successMessage:
                    'Rất tốt! Bác đã nhận biết được tin nhắn cần cẩn thận.',
            },
        ],
    },

    unknown_link: {
        id: 'unknown_link',
        title: 'Không bấm liên kết lạ',
        description:
            'Bác học cách nhận biết các đường link không quen thuộc được gửi qua tin nhắn.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu nhận được đường link từ người hoặc số điện thoại không quen, bác không nên vội bấm vào.',
                successMessage:
                    'Đúng rồi ạ! Bác nên kiểm tra trước.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút đóng hoặc bỏ qua đường link trong màn hình mô phỏng.',
                successMessage:
                    'Rất tốt! Bác đã biết cách tránh bấm vào liên kết lạ.',
            },
        ],
    },

    otp: {
        id: 'otp',
        title: 'Bảo vệ mã OTP',
        description:
            'Bác học cách hiểu mã xác nhận và tuyệt đối không đọc mã cho người lạ.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Mã OTP là mã xác nhận dùng trong một số giao dịch hoặc đăng nhập. Bác không nên đọc mã OTP cho người khác.',
                successMessage:
                    'Rất tốt! Bác nhớ giữ kín mã OTP nhé.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn thao tác không chia sẻ mã OTP trong màn hình mô phỏng.',
                successMessage:
                    'Chính xác! Mã OTP cần được giữ bí mật.',
            },
        ],
    },

    personal_information: {
        id: 'personal_information',
        title: 'Bảo vệ thông tin cá nhân',
        description:
            'Bác học cách nhận biết những thông tin không nên gửi cho người không quen.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Các thông tin như mật khẩu, mã OTP và thông tin tài khoản cần được giữ kín.',
                successMessage:
                    'Bác đã biết những thông tin quan trọng cần bảo vệ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn thông tin không nên gửi cho người lạ.',
                successMessage:
                    'Rất tốt! Bác đã biết cách bảo vệ thông tin cá nhân.',
            },
        ],
    },

    fake_prize: {
        id: 'fake_prize',
        title: 'Cẩn thận với thông báo trúng thưởng',
        description:
            'Bác học cách nhận biết những lời mời nhận quà hoặc tiền có dấu hiệu bất thường.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu có người thông báo bác trúng thưởng nhưng yêu cầu chuyển tiền hoặc cung cấp thông tin bí mật, bác cần cẩn thận.',
                successMessage:
                    'Đúng rồi ạ! Bác không nên vội làm theo.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn nút đóng thông báo trúng thưởng đáng ngờ.',
                successMessage:
                    'Rất tốt! Bác đã biết cách dừng lại trước một lời mời đáng ngờ.',
            },
        ],
    },

    fake_support: {
        id: 'fake_support',
        title: 'Cẩn thận với người tự xưng nhân viên hỗ trợ',
        description:
            'Bác học cách xử lý khi có người yêu cầu cài ứng dụng hoặc chia sẻ mã.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Người lạ tự xưng là nhân viên hỗ trợ có thể yêu cầu bác cài ứng dụng hoặc cung cấp mã. Bác không nên làm ngay.',
                successMessage:
                    'Bác nhớ kiểm tra trước khi làm theo yêu cầu nhé.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn thao tác dừng lại và không cài ứng dụng trong màn hình mô phỏng.',
                successMessage:
                    'Rất tốt! Khi chưa chắc chắn, bác nên dừng lại và hỏi người thân.',
            },
        ],
    },

    ask_family: {
        id: 'ask_family',
        title: 'Khi nghi ngờ, hỏi người thân',
        description:
            'Bác học cách dừng lại và nhờ con cháu kiểm tra trước khi làm tiếp.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu bác thấy một cuộc gọi, tin nhắn hoặc yêu cầu nào đó đáng ngờ, bác có thể dừng lại và hỏi người thân.',
                successMessage:
                    'Rất tốt! Hỏi người thân là một cách kiểm tra trước khi làm tiếp.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Hỏi người thân trong màn hình mô phỏng.',
                successMessage:
                    'Chính xác! Khi chưa chắc chắn, bác không cần tự xử lý một mình.',
            },
        ],
    },

    emergency_safety: {
        id: 'emergency_safety',
        title: 'Khi điện thoại có vấn đề bất thường',
        description:
            'Bác học cách khóa máy, ngắt kết nối và nhờ người thân hỗ trợ.',
        steps: [
            {
                id: 'step_1',
                type: 'info',
                instruction:
                    'Nếu điện thoại xuất hiện thông báo lạ hoặc hoạt động bất thường, bác nên bình tĩnh và không làm theo yêu cầu đáng ngờ.',
                successMessage:
                    'Đúng rồi ạ. Bác cứ bình tĩnh trước nhé.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn thao tác khóa màn hình hoặc đóng thông báo lạ.',
                successMessage:
                    'Rất tốt! Bác đã biết cách dừng lại khi điện thoại có vấn đề.',
            },
            {
                id: 'step_3',
                type: 'info',
                instruction:
                    'Sau đó, bác có thể nhờ con cháu hoặc người đáng tin cậy kiểm tra giúp.',
                successMessage:
                    'Chính xác! Khi chưa chắc chắn, bác nên nhờ người thân hỗ trợ.',
            },
        ],
    },

    // =========================================================
    // LEVEL 9: THỰC HÀNH SỬ DỤNG ĐIỆN THOẠI TRONG CUỘC SỐNG
    // =========================================================

    daily_call: {
        id: 'daily_call',
        title: 'Gọi cho một người thân',
        description:
            'Bác thực hành tìm người trong danh bạ và thực hiện một cuộc gọi hoàn chỉnh.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Danh bạ và chọn một người thân.',
                successMessage:
                    'Rất tốt! Bác đã tìm được người muốn gọi.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gọi.',
                successMessage:
                    'Đúng rồi ạ! Cuộc gọi đang được thực hiện.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Khi muốn kết thúc, bác hãy chạm vào nút màu đỏ.',
                successMessage:
                    'Tuyệt vời! Bác đã hoàn thành một cuộc gọi.',
            },
        ],
    },

    daily_zalo: {
        id: 'daily_zalo',
        title: 'Nhắn tin cho người thân',
        description:
            'Bác thực hành gửi một tin nhắn chữ hoặc tin nhắn thoại qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Zalo và chọn cuộc trò chuyện với người thân.',
                successMessage:
                    'Rất tốt! Bác đã mở đúng cuộc trò chuyện.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy nhập một tin nhắn ngắn hoặc dùng micro để ghi âm.',
                successMessage:
                    'Bác đã chuẩn bị được tin nhắn.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào nút Gửi.',
                successMessage:
                    'Tuyệt vời! Bác đã gửi tin nhắn cho người thân.',
            },
        ],
    },

    daily_photo: {
        id: 'daily_photo',
        title: 'Chụp và gửi một bức ảnh',
        description:
            'Bác thực hành chụp ảnh rồi gửi cho con cháu qua Zalo.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Camera và chụp một bức ảnh.',
                successMessage:
                    'Rất tốt! Bác đã chụp được ảnh.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy mở ảnh vừa chụp và chọn Chia sẻ.',
                successMessage:
                    'Bác đã mở được các lựa chọn chia sẻ ảnh.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn Zalo và chọn người thân muốn gửi ảnh.',
                successMessage:
                    'Tuyệt vời! Bác đã gửi được bức ảnh.',
            },
        ],
    },

    daily_video_call: {
        id: 'daily_video_call',
        title: 'Thực hiện một cuộc gọi video',
        description:
            'Bác thực hành gọi video và bật camera để nói chuyện với người thân.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở cuộc trò chuyện với người thân trên Zalo.',
                successMessage:
                    'Rất tốt! Bác đã mở đúng cuộc trò chuyện.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng camera để gọi video.',
                successMessage:
                    'Đúng rồi ạ! Cuộc gọi video đang được thực hiện.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Khi muốn kết thúc, bác hãy chạm vào nút màu đỏ.',
                successMessage:
                    'Tuyệt vời! Bác đã hoàn thành cuộc gọi video.',
            },
        ],
    },

    daily_youtube: {
        id: 'daily_youtube',
        title: 'Tìm và xem một video',
        description:
            'Bác thực hành dùng YouTube để tìm một chương trình hoặc bài hát yêu thích.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở YouTube.',
                successMessage:
                    'Rất tốt! Bác đã mở được YouTube.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô tìm kiếm và nhập tên chương trình hoặc bài hát.',
                successMessage:
                    'Bác đã tìm được nội dung muốn xem.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào video muốn xem.',
                successMessage:
                    'Tuyệt vời! Bác đã tìm và mở được video.',
            },
        ],
    },

    daily_maps: {
        id: 'daily_maps',
        title: 'Tìm một địa điểm trên bản đồ',
        description:
            'Bác thực hành tự tìm một địa điểm quen thuộc bằng Google Maps.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Google Maps.',
                successMessage:
                    'Rất tốt! Bác đã mở bản đồ.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào ô tìm kiếm và nhập một địa điểm quen thuộc.',
                successMessage:
                    'Bác đã tìm được địa điểm.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào địa điểm trong kết quả tìm kiếm.',
                successMessage:
                    'Tuyệt vời! Bác đã tìm được địa điểm trên bản đồ.',
            },
        ],
    },

    daily_share_location: {
        id: 'daily_share_location',
        title: 'Gửi vị trí cho người thân',
        description:
            'Bác thực hành chia sẻ vị trí hiện tại khi cần người thân tìm đến.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở Google Maps và xem vị trí hiện tại.',
                successMessage:
                    'Rất tốt! Bác đã tìm thấy vị trí của mình.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy chọn tùy chọn chia sẻ vị trí.',
                successMessage:
                    'Bác đã mở được chức năng chia sẻ vị trí.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chọn Zalo để gửi vị trí cho người thân.',
                successMessage:
                    'Tuyệt vời! Bác đã biết cách gửi vị trí.',
            },
        ],
    },

    daily_gallery: {
        id: 'daily_gallery',
        title: 'Tìm lại một bức ảnh cũ',
        description:
            'Bác thực hành mở thư viện và tìm một bức ảnh đã chụp trước đó.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy mở ứng dụng Thư viện hoặc Ảnh.',
                successMessage:
                    'Rất tốt! Bác đã mở được thư viện ảnh.',
            },
            {
                id: 'step_2',
                type: 'swipe_up',
                instruction:
                    'Bác hãy vuốt lên để xem những bức ảnh cũ hơn.',
                successMessage:
                    'Bác đã tìm được thêm ảnh trong thư viện.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào một bức ảnh cũ.',
                successMessage:
                    'Tuyệt vời! Bác đã tìm lại được bức ảnh.',
            },
        ],
    },

    daily_voice: {
        id: 'daily_voice',
        title: 'Dùng giọng nói thay cho bàn phím',
        description:
            'Bác thực hành nói để tìm kiếm hoặc nhập một tin nhắn.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy chạm vào biểu tượng micro trên bàn phím hoặc ô tìm kiếm.',
                successMessage:
                    'Rất tốt! Điện thoại đang chờ bác nói.',
            },
            {
                id: 'step_2',
                type: 'info',
                instruction:
                    'Bác hãy nói chậm và rõ nội dung muốn tìm hoặc muốn nhập.',
                successMessage:
                    'Bác đã biết cách dùng giọng nói thay cho bàn phím.',
            },
        ],
    },

    final_practice: {
        id: 'final_practice',
        title: 'Bài thực hành tổng hợp',
        description:
            'Bác thực hành gọi điện, nhắn Zalo, chụp ảnh, gửi ảnh và tìm đường trên bản đồ.',
        steps: [
            {
                id: 'step_1',
                type: 'tap',
                instruction:
                    'Bác hãy gọi điện cho một người thân từ Danh bạ.',
                successMessage:
                    'Rất tốt! Bác đã hoàn thành phần gọi điện.',
            },
            {
                id: 'step_2',
                type: 'tap',
                instruction:
                    'Bác hãy mở Zalo và gửi một tin nhắn cho người thân.',
                successMessage:
                    'Bác đã hoàn thành phần nhắn tin.',
            },
            {
                id: 'step_3',
                type: 'tap',
                instruction:
                    'Bác hãy chụp một bức ảnh và gửi ảnh đó qua Zalo.',
                successMessage:
                    'Tuyệt vời! Bác đã hoàn thành phần chụp và gửi ảnh.',
            },
            {
                id: 'step_4',
                type: 'tap',
                instruction:
                    'Bác hãy mở Google Maps và tìm đường đến một địa điểm quen thuộc.',
                successMessage:
                    'Rất tốt! Bác đã hoàn thành bài thực hành tổng hợp.',
            },
        ],
    },
};