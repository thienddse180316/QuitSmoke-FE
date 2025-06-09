import { Footer } from "./homePage";

function Survey() {
    return (
        <>
        <div id="survey">
            <h1 style={{color:'#16a34a'}}>QuitSmoking</h1>
            <p>Giúp chúng tôi hiểu thói quen của bạn để tạo kế hoạch cai thuốc phù hợp nhất</p>
            <form action="/survey" method="POST">
                <h2>Bạn thường hút loại thuốc lá nào?</h2>
                <div style={{textAlign: 'left'}}>
                    <input type="radio" id="smokeType" name="smokeType" value="cigarette" required />
                    <label htmlFor="cigarette">Thuốc lá điếu</label> <br/>
                    <input type="radio" id="smokeType" name="smokeType" value="menthol cigarette" />
                    <label htmlFor="menthol cigarette">Thuốc lá bạc hà</label> <br/>
                    <input type="radio" id="smokeType" name="smokeType" value="menthol cigarette" />
                    <label htmlFor="menthol cigarette">Thuốc lá bạc hà</label> <br/>
                    <input type="radio" id="smokeType" name="smokeType" value="roll-your-own cigarette" />
                    <label htmlFor="roll-your-own cigarette">Thuốc lá cuốn tay</label> <br/>
                    <input type="radio" id="smokeType" name="smokeType" value="electronic cigarette" />
                    <label htmlFor="electronic cigarette">Thuốc lá điện tử</label> <br/>
                    <input type="radio" id="smokeType" name="smokeType" value="other" />
                    <label htmlFor="other">Khác</label> <br/>
                </div>
                <h2>Bạn hút bao nhiêu điếu mỗi ngày?</h2>
                <p>Ví dụ: 10 điếu</p>
                <input className="input-class" type="number" id="cigarettesPerDay" name="cigarettesPerDay" min="0" placeholder="Nhập số điếu mỗi ngày" required/>
                <h2>Bạn đã hút thuốc bao lâu rồi?</h2>
                <p>Ví dụ: 10 năm</p>
                <input className="input-class" type="number" id="yearsSmoking" name="yearsSmoking" min="0" placeholder="Nhập số năm hút thuốc" required/>
                <h2>Trung bình mỗi gói thuốc bạn sử dụng có giá bao nhiêu?</h2>
                <p>Ví dụ: 30.000 VND</p>
                <input className="input-class" type="number" id="packPrice" name="packPrice" min="0" placeholder="Nhập giá gói thuốc (đồng)" required/>
                <h2>Bạn hút điều thuốc đầu tiên sau khi thức dậy lúc nào?</h2>
                <div style={{textAlign: 'left'}}>
                    <input type="radio" id="firstSmokeTime" name="firstSmokeTime" value="within 5 minutes" required/>
                    <label htmlFor="within 5 minutes">Trong vòng 5 phút</label> <br/>
                    <input type="radio" id="firstSmokeTime" name="firstSmokeTime" value="6-30 minutes" />
                    <label htmlFor="6-30 minutes">Từ 6 đến 30 phút</label> <br/>
                    <input type="radio" id="firstSmokeTime" name="firstSmokeTime" value="31-60 minutes" />
                    <label htmlFor="31-60 minutes">Từ 31 đến 60 phút</label> <br/>
                    <input type="radio" id="firstSmokeTime" name="firstSmokeTime" value="after 60 minutes" />
                    <label htmlFor="after 60 minutes">Sau 60 phút</label> <br/>
                    <span className="checkmark"></span>
                    <input type="radio" id="firstSmokeTime" name="firstSmokeTime" value="I don't smoke in the morning" />
                    <label htmlFor="I don't smoke in the morning">Tôi không hút thuốc vào buổi sáng</label> <br/>
                </div>
                <h2>Bạn muốn bắt đầu hành trình cai thuốc khi nào?</h2>
                <div style={{textAlign: 'left'}}>
                    <input type="date" name="dateStart" id="dateStart" className="input-class-date" placeholder="Chọn ngày bắt đầu" required/>
                </div>
                <div className="button-container">
                    <input type="submit" value="Tiếp tục" />
                </div>
                
                
                </form>
                <Footer />
        </div>
        </>
    )
}

export default Survey;