import { useState } from "react";
import { NavBar } from "./dashBoard";
import './App.css';

const sampleCoaches = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    avatar: "https://via.placeholder.com/100",
    bookedSlots: [2, 5],
  },
  {
    id: 2,
    name: "Trần Thị B",
    avatar: "https://via.placeholder.com/100",
    bookedSlots: [3, 8],
  },
];

const symptoms = [
  "Thèm thuốc nhiều",
  "Bức rứt khi không hút",
  "Khó tập trung",
  "Mất ngủ",
  "Khác",
];

function Coach() {
  const [selected, setSelected] = useState({
    coach: null,
    symptom: "",
    slot: null,
  });

  const openModal = (coach) =>
    setSelected({ coach, symptom: "", slot: null });
  const closeModal = () =>
    setSelected({ coach: null, symptom: "", slot: null });
  const confirm = () => {
    if (!selected.symptom || selected.slot === null) {
      return alert("Chọn triệu chứng và slot đã!");
    }
    alert(
      `Đã đặt với ${selected.coach.name}\nTriệu chứng: ${selected.symptom}\nSlot: ${
        ["T2", "T3", "T4", "T5", "T6", "T7", "CN"][Math.floor(selected.slot / 2)]
      } ${selected.slot % 2 === 0 ? "Sáng" : "Chiều"}`
    );
    closeModal();
  };

  return (
    <>
    <div className="coach-page">
      <NavBar />
      <div className="coach-container">
        <h1 className="coach-title">Chuyên gia</h1>
        {sampleCoaches.map((c) => (
          <div key={c.id} className="coach-card">
            <img src={c.avatar} alt={c.name} className="coach-avatar" />
            <div className="coach-info">
              <h2 className="coach-name">{c.name}</h2>
              <div className="coach-slot-grid">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`coach-slot ${
                      c.bookedSlots.includes(i)
                        ? "slot-booked"
                        : "slot-available"
                    }`}
                  >
                    {`${["T2", "T3", "T4", "T5", "T6", "T7", "CN"][Math.floor(i / 2)]} ${
                      i % 2 === 0 ? "S" : "C"
                    }`}
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-booking" onClick={() => openModal(c)}>
              Booking
            </button>
          </div>
        ))}
      </div>

      {selected.coach && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Đặt lịch với {selected.coach.name}</h3>
            <div className="modal-section">
              <p className="modal-label">Triệu chứng:</p>
              <div className="symptom-buttons">
                {symptoms.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected({ ...selected, symptom: s })}
                    className={`symptom-button ${
                      selected.symptom === s ? "selected" : ""
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-section">
              <p className="modal-label">Chọn slot (7 ngày × 2 slot):</p>
              <div className="slot-grid">
                {Array.from({ length: 14 }).map((_, i) => {
                  const booked = selected.coach.bookedSlots.includes(i);
                  const active = selected.slot === i;
                  return (
                    <button
                      key={i}
                      disabled={booked}
                      onClick={() => setSelected({ ...selected, slot: i })}
                      className={`slot-button ${
                        booked
                          ? "slot-disabled"
                          : active
                          ? "slot-active"
                          : ""
                      }`}
                    >
                      {booked
                        ? "❌"
                        : `${["T2", "T3", "T4", "T5", "T6", "T7", "CN"][Math.floor(i / 2)]} ${
                            i % 2 === 0 ? "S" : "C"
                          }`}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={closeModal}>
                Hủy
              </button>
              <button className="btn-confirm" onClick={confirm}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
    </>
  );
}

export default Coach;
