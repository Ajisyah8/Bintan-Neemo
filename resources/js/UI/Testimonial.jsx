import React, { useEffect, useState } from "react";

export default function Testimonial() {
    const [userReviews, setUserReviews] = useState([]);
    const [form, setForm] = useState({
        name: "",
        text: "",
        rating: 5,
        phone: "",
        address: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    function chunkArray(array, size) {
        const chunked = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    }

    const limitedReviews = userReviews.slice(0, 9);
    const chunkedSlides = chunkArray(limitedReviews, 3);
    const totalSlidesLimited = chunkedSlides.length;

    useEffect(() => {
        if (!totalSlidesLimited) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlidesLimited);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlidesLimited]);
    useEffect(() => {
        fetch("/api/reviews")
            .then((res) => res.json())
            .then((data) => setUserReviews(data))
            .catch((err) => console.error("Failed to fetch reviews:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.text || !form.phone || !form.address) return;

        const newReview = {
            ...form,
            photo: "",
            created_at: new Date().toISOString(),
        };

        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            });

            if (res.ok) {
                setUserReviews((prev) => [...prev, newReview]);
                setForm({
                    name: "",
                    text: "",
                    rating: 5,
                    phone: "",
                    address: "",
                });
                setShowModal(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="bg-[#FDF6E3] font-[Montserrat] py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-[#005B99] text-lg sm:text-xl font-semibold mb-2">
                    Testimonial
                </h3>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-10">
                    What Our Guests Say
                </h1>

                <button
                    className="bg-[#0096C7] text-white px-6 py-2 rounded text-sm sm:text-base"
                    onClick={() => setShowModal(true)}
                >
                    Leave a Review
                </button>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                        <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">
                                Submit Review
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full border px-3 py-2 rounded text-sm"
                                />
                                <textarea
                                    placeholder="Your Review"
                                    value={form.text}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            text: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full border px-3 py-2 rounded resize-none text-sm"
                                    rows="3"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full border px-3 py-2 rounded text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={form.address}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            address: e.target.value,
                                        })
                                    }
                                    required
                                    className="w-full border px-3 py-2 rounded text-sm"
                                />
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Rating:</span>
                                    {[1, 2, 3, 4, 5].map((r) => (
                                        <button
                                            type="button"
                                            key={r}
                                            className={
                                                form.rating >= r
                                                    ? "text-yellow-400 text-xl"
                                                    : "text-gray-300 text-xl"
                                            }
                                            onClick={() =>
                                                setForm({ ...form, rating: r })
                                            }
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
                                    <button
                                        type="button"
                                        className="px-4 py-2 rounded border text-sm"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded bg-[#0096C7] text-white w-full sm:w-auto text-sm"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <div className="relative overflow-hidden mt-10">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${totalSlidesLimited * 100}%`,
                            transform: `translateX(-${
                                (100 / totalSlidesLimited) * currentSlide
                            }%)`,
                        }}
                    >
                        {chunkedSlides.map((group, index) => (
                            <div
                                key={index}
                                className="w-full px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-shrink-0"
                                style={{
                                    width: `${100 / totalSlidesLimited}%`,
                                }}
                            >
                                {group.map((item, i) => (
                                    <div
                                        key={i}
                                        className="relative bg-white w-full pt-14 pb-6 px-6 rounded-lg shadow-lg text-left mt-24"
                                    >
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md bg-gray-100 overflow-hidden z-20">
                                            <img
                                                src={
                                                    item.photo?.trim()
                                                        ? item.photo
                                                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                              item.name ||
                                                                  "User"
                                                          )}&background=cccccc&color=ffffff&rounded=true&size=128`
                                                }
                                                alt="User Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base mt-3 mb-4">
                                            {item.text}
                                        </p>
                                        <hr className="my-2" />
                                        <div className="flex justify-between items-center flex-wrap mt-2">
                                            <div>
                                                <p className="font-bold text-gray-800 text-sm sm:text-base">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500">
                                                    {item.phone}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500">
                                                    {item.address}
                                                </p>
                                            </div>
                                            <div className="mt-2 text-[#0096C7] text-sm flex gap-[2px]">
                                                {[1, 2, 3, 4, 5].map((r) => (
                                                    <span
                                                        key={r}
                                                        className={
                                                            r <=
                                                            (item.rating || 5)
                                                                ? "text-[#0096C7]"
                                                                : "text-gray-300"
                                                        }
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6 gap-3 sm:gap-2">
                        {chunkedSlides.map((_, i) => (
                            <button
                                key={i}
                                className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition ${
                                    i === currentSlide
                                        ? "bg-[#0096C7]"
                                        : "bg-[#F7DC98]"
                                }`}
                                onClick={() => setCurrentSlide(i)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
