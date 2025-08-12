import seriesPoster1 from "../assets/images/posters/1.jpg"
import seriesPoster2 from "../assets/images/posters/2.jpg"
import seriesPoster3 from "../assets/images/posters/3.jpg"
import seriesPoster4 from "../assets/images/posters/4.jpg"
import seriesPoster5 from "../assets/images/posters/5.jpg"
import seriesPoster6 from "../assets/images/posters/6.jpg"
import seriesPoster7 from "../assets/images/posters/7.jpg"
import seriesPoster8 from "../assets/images/posters/8.jpg"
import seriesPoster9 from "../assets/images/posters/9.jpg"
import seriesPoster10 from "../assets/images/posters/10.jpg"
import seriesPoster11 from "../assets/images/posters/11.jpg"
import seriesPoster12 from "../assets/images/posters/12.jpg"

import cast1 from "../assets/images/casts/1.jpg"
import cast2 from "../assets/images/casts/2.jpg"
import cast3 from "../assets/images/casts/3.jpg"
import cast4 from "../assets/images/casts/4.jpg"
import cast5 from "../assets/images/casts/5.jpg"

const dummyCastsData = [
    {name: "Hailee Steinfeld", castName: "Kate Bishop", castImg : cast1},
    {name: "", castName: "Pizza Dog", castImg : cast2},
    {name: "Jeremy Renner", castName: "Clint Barton", castImg : cast3},
    {name: "Florence Pugh", castName: "Yelena Belova", castImg : cast4},
    {name: "Vera Farmiga", castName: "Eleanor Bishop", castImg : cast5},
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyShowsData = [
    {
        "_id": "318452",
        "id": 318452,
        "title": "Ironheart",
        "overview": "Riri Williams, a brilliant teenage inventor, creates the most advanced suit of armor since Iron Man. As she finds her place in a post-Tony Stark world, she faces threats that test her genius and heart.",
        "poster_path": seriesPoster1,
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-01-01",
        "original_language": "en",
        "tagline": "From the legacy of Iron Man rises a new hero.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 6
    }, {
        "_id": "520498",
        "id": 520498,
        "title": "Hawkeye",
        "overview": "Former Avenger Clint Barton teams up with a young archer, Kate Bishop, to confront enemies from his past as Ronin — all while trying to get home in time for Christmas.",
        "poster_path": seriesPoster2,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 18, "name": "Drama" },
            { "id": 80, "name": "Crime" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-11-24",
        "original_language": "en",
        "tagline": "This holiday season, the best gifts come with a bow.",
        "vote_average": 7.6,
        "vote_count": 95000,
        "total_episodes": 6
    },{
        "_id": "907134",
        "id": 907134,
        "title": "Daredevil: Born Again",
        "overview": "Matt Murdock returns to Hell's Kitchen as Daredevil, balancing life as a blind lawyer and a masked vigilante. With old enemies rising and new threats emerging, his darkest chapter unfolds.",
        "poster_path": seriesPoster3,
        "genres": [
            { "id": 80, "name": "Crime" },
            { "id": 18, "name": "Drama" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-01",
        "original_language": "en",
        "tagline": "Justice never dies.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 18
    }, {
        "_id": "284761",
        "id": 284761,
        "title": "Ms. Marvel",
        "overview": "Kamala Khan, a Muslim American teenager growing up in Jersey City, discovers she has polymorphic powers. As a huge fan of the Avengers—especially Captain Marvel—Kamala struggles to balance high school life, family expectations, and her newfound identity as a superhero.",
        "poster_path": seriesPoster4,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 35, "name": "Comedy" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-06-08",
        "original_language": "en",
        "tagline": "Not all heroes have to be grown up.",
        "vote_average": 6.2,
        "vote_count": 45000,
        "total_episodes": 6
    }, {
        "_id": "675230",
        "id": 675230,
        "title": "Agatha: All Along",
        "overview": "Agatha Harkness returns after the events of Westview, stripped of her powers and forced to reckon with her past. As she explores dark magic and the mysteries of witchcraft, a new coven may rise—or fall.",
        "poster_path": seriesPoster5,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 9648, "name": "Mystery" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-09-18",
        "original_language": "en",
        "tagline": "Witches. Chaos. Secrets. And it’s been Agatha all along.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 9
    }, {
        "_id": "139846",
        "id": 139846,
        "title": "WandaVision",
        "overview": "Living idealized suburban lives, Wanda Maximoff and Vision begin to suspect that everything is not as it seems. As their world unravels, they must confront the truth behind their constructed reality.",
        "poster_path": seriesPoster6,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 18, "name": "Drama" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-01-15",
        "original_language": "en",
        "tagline": "A love story, a mystery, and a reality unlike any other.",
        "vote_average": 8.0,
        "vote_count": 120000,
        "total_episodes": 9
    },{
        "_id": "746193",
        "id": 746193,
        "title": "The Falcon and the Winter Soldier",
        "overview": "Sam Wilson and Bucky Barnes team up on a global mission that tests their abilities—and their patience—in the aftermath of Captain America's legacy.",
        "poster_path": seriesPoster7,
        "genres": [
            { "id": 10759, "name": "Action & Adventure" },
            { "id": 18, "name": "Drama" },
            { "id": 10768, "name": "War & Politics" }
        ],
        "casts": dummyCastsData,
        "release_date": "2021-03-19",
        "original_language": "en",
        "tagline": "Honor the legacy. Fight for the future.",
        "vote_average": 7.2,
        "vote_count": 90000,
        "total_episodes": 6
    }, {
        "_id": "381920",
        "id": 381920,
        "title": "Your Friendly Neighborhood Spider-Man",
        "overview": "An animated retelling of Peter Parker’s early days as Spider-Man, navigating high school, friendship, and his journey into becoming a hero—with a twist on the origin story.",
        "poster_path": seriesPoster8,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-11-02",
        "original_language": "en",
        "tagline": "Every hero has a beginning—even in high school.",
        "vote_average": 0,
        "vote_count": 0,
        "total_episodes": 10
    }, {
        "_id": "609473",
        "id": 609473,
        "title": "Loki Season 2",
        "overview": "After the multiverse fractures, Loki joins forces with Mobius, Sylvie, and new allies to navigate time loops, branching timelines, and unraveling chaos at the TVA. The fate of reality hangs in the balance.",
        "poster_path": seriesPoster9,
        "genres": [
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 18, "name": "Drama" },
            { "id": 10759, "name": "Action & Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-10-05",
        "original_language": "en",
        "tagline": "Time is running out.",
        "vote_average": 8.3,
        "vote_count": 75000,
        "total_episodes": 6
    }, {
        "_id": "492087",
        "id": 492087,
        "title": "X-Men '97",
        "overview": "The X-Men are back in this continuation of the iconic 1990s animated series, facing new threats and internal conflict as they fight to protect a world that hates and fears them.",
        "poster_path": seriesPoster10,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 28, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-03-20",
        "original_language": "en",
        "tagline": "The mutant legacy lives on.",
        "vote_average": 8.5,
        "vote_count": 30000,
        "total_episodes": 10
    }, {
        "_id": "753810",
        "id": 753810,
        "title": "Guardians of the Galaxy Holiday Special",
        "overview": "The Guardians head to Earth to find the perfect Christmas gift for Peter Quill. What follows is a heartwarming and hilarious adventure filled with festive chaos, unexpected surprises, and galactic cheer.",
        "poster_path": seriesPoster11,
        "genres": [
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 10751, "name": "Family" }
        ],
        "casts": dummyCastsData,
        "release_date": "2022-11-25",
        "original_language": "en",
        "tagline": "The galaxy’s most festive misfits are back.",
        "vote_average": 6.9,
        "vote_count": 25000,
        "total_episodes": 1
    }, {
        "_id": "864209",
        "id": 864209,
        "title": "What If...? Season 2",
        "overview": "The Watcher guides us through new and strange alternate realities in the Marvel multiverse, featuring unexpected twists, reimagined heroes, and surprising outcomes to familiar stories.",
        "poster_path": seriesPoster12,
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 10765, "name": "Sci-Fi & Fantasy" },
            { "id": 28, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2023-12-22",
        "original_language": "en",
        "tagline": "New worlds. New heroes. Same Watcher.",
        "vote_average": 7.4,
        "vote_count": 20000,
        "total_episodes": 9
    }
]

// export const dummyMoviessData = [

//     {
//     "_id": "43827",
//     "id": 43827,
//     "title": "Avengers: Age of Ultron",
//     "overview": "When Tony Stark jumpstarts a dormant peacekeeping program, things go terribly wrong, forcing him, Thor, the Hulk, and the rest of the Avengers to reassemble as the fate of Earth hangs in the balance. As the villainous Ultron emerges, it's up to Earth's mightiest heroes to stop him from enacting his terrible plans.",
//     "poster_path": moviePoster1, // Replace with actual image import or URL
//     "genres": [
//         { "id": 28, "name": "Action" },
//         { "id": 12, "name": "Adventure" },
//         { "id": 878, "name": "Science Fiction" }
//     ],
//     "casts": dummyCastsData, 
//     "release_date": "2015-05-01",
//     "original_language": "en",
//     "tagline": "A new age begins.",
//     "vote_average": 7.3,
//     "vote_count": 78000,
//     "runtime": 141
// },

//     {
//     "_id": "87542",
//     "id": 87542,
//     "title": "Black Widow",
//     "overview": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
//     "poster_path": moviePoster2,
//     "genres": [
//         { "id": 28, "name": "Action" },
//         { "id": 12, "name": "Adventure" },
//         { "id": 878, "name": "Science Fiction" }
//     ],
//     "casts": dummyCastsData,
//     "release_date": "2021-07-09",
//     "original_language": "en",
//     "tagline": "Her world. Her secrets. Her legacy.",
//     "vote_average": 6.8,
//     "vote_count": 32000,
//     "runtime": 134
// }

// ]

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]