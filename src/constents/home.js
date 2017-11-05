const urlRoot = '//swan-photo.oss-cn-hangzhou.aliyuncs.com';
const path = {
    5: urlRoot + '/2017japan/',
    4: urlRoot + '/2016france/',
    3: urlRoot + '/2016italy/',
    2: urlRoot + '/2016greece/',
    1: urlRoot + '/2016hangzhouWeddingPhotos/'
};

export default {
    items : [
        {
            id: 5,
            url: path[5] + "she/IMG_5170.JPG",
            slider: [
                path[5] + "she/IMG_5170.JPG",
                path[5] + "she/IMG_2309.JPG",
                path[5] + "group/IMG_5391.JPG",
                path[5] + "she/6176645488_IMG_3628.JPG",
                path[5] + "she/IMG_5183.JPG",
                path[5] + "she/IMG_2310.JPG"
            ],
            doc: {
                date: "APRIL 9th, 2017",
                title: "DANCE OF SAKURA",
                des: "Tomb-sweeping Day 2017, Annual travel and It's also birthday present for Mother and Pet. We meet the dance of sakura again in Kyoto"
            }
        },
        {
            id: 4,
            url: path[4] + "IMG_2103.JPG",
            slider: [
                path[4] + "IMG_2103.JPG",
                path[4] + "IMG_0607.JPG",
                path[4] + "IMG_1356.JPG",
                path[4] + "IMG_1145.JPG"
            ],
            doc: {
                date: "SEPTEMBER 15th, 2016",
                title: "LOVE IN PARIS",
                des: "The honeymoon was ended on the Eiffel Tower and the champs elysees"
            }
        },
        {
            id: 3,
            url: path[3] + "IMG_3686_meitu_11.jpg",
            slider: [
                path[3] + "IMG_3686_meitu_11.jpg",
                path[3] + "IMG_4580_meitu_30.jpg",
                path[3] + "IMG_9123_meitu_35.jpg",
                path[3] + "IMG_0036_meitu_1.jpg",
            ],
            doc: {
                date: "SEPTEMBER 11th, 2016",
                title: "ROMAN HOLIDAY",
                des: "Swan attends a benefit premiere of 'Roman Holiday,' the movie that made her a superstar, in 2016."
            }
        },
        {
            id: 2,
            url: path[2] + "IMG_7989_meitu_16.jpg",
            slider: [
                path[2] + "IMG_7989_meitu_16.jpg",
                path[2] + "IMG_2148_meitu_11.jpg",
                path[2] + "IMG_1398_meitu_3.jpg",
                path[2] + "IMG_1211_meitu_1.jpg",
                path[2] + "IMG_8445_meitu_10.jpg"
            ],
            doc: {
                date: "SEPTEMBER 1th, 2016",
                title: "AEGEAN SEA AND ATHENS",
                des: "In this afternoon the body is a BLUES, dancing with the lively Aegean Sea, dancing and dancing just like dancing in Athens."
            }
        },
        {
            id: 1,
            url: path[1] + "0F1A9425.jpg",
            slider: [
                path[1] + "0F1A9425.jpg",
                path[1] + "L_YJ0943.jpg",
                path[1] + "L_YJ0875.jpg",
                path[1] + "1P8A8777.jpg",
                path[1] + "L_YJ0861.jpg"
            ],
            doc: {
                date: "MAY 17th, 2016",
                title: "THE WEDDING DRESS",
                des: "We have finished our wedding photos by the west lak."
            }
        }
    ]
}