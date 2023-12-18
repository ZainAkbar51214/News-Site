import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    articles =  [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "Possible cause of morning sickness discovered, clearing way for potential treatment",
            "description": "A new study finds severe morning sickness in pregnant women may be linked to a certain hormone produced in the placenta, and doctors say the discovery could help lead to new treatments to prevent the condition. CBS News' Tina Kraus reports.",
            "url": "https://www.cbsnews.com/video/possible-cause-of-morning-sickness-discovered-clearing-way-for-potential-treatment/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/14/7751c4b5-02f3-410f-8f64-1358b7a09ea8/thumbnail/1200x630/ac418d5a8d0a1eb10481f72712d0f1d7/morningsick.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
            "publishedAt": "2023-12-14T20:00:00+00:00",
            "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Women's Champions League: Chelsea v Hacken build-up & team news",
            "description": "Follow text updates as Chelsea face Hacken in Group D of the Women's Champions League.",
            "url": "http://www.bbc.co.uk/sport/live/football/67370365",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-12-14T19:52:22.9627177Z",
            "content": "Guro Reiten makes her first start since October for Chelsea tonight after recovering from an ankle ligament injury.\r\nManager Emma Hayes makes five changes from the side who were beaten 4-1 by Arsenal… [+1051 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "John Nolte",
            "title": "Nolte: Report Says Hunter Is Loose Speedball on Joe’s Sinking USS: Reelection",
            "description": "While defying a legal congressional subpoena, Hunter Biden decided to hold a news conference, and the White House was not happy.",
            "url": "http://www.breitbart.com/politics/2023/12/14/nolte-report-says-hunter-loose-speedball-joes-sinking-uss-reelection/",
            "urlToImage": "https://media.breitbart.com/media/2023/12/Hunter-Biden-news-conference-getty-640x335.jpg",
            "publishedAt": "2023-12-14T19:14:58Z",
            "content": "On Wednesday, while defying a legal congressional subpoena, Hunter Biden decided to hold a news conference, and the White House reelection team was not happy.\r\nVia the far-left Axios:\r\nHunter’s new s… [+3247 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "Israelis tell U.S. officials current phase of Gaza offensive should end in weeks, sources say",
            "description": "U.S. National Security Adviser Jake Sullivan is visiting Israel to discuss a timeline of the war against Hamas in Gaza that is affecting millions of Palestinian civilians. BBC News Middle East correspondent Hugo Bachega is following the discussions between th…",
            "url": "https://www.cbsnews.com/video/israelis-tells-us-officials-current-phase-gaza-offensive-should-end-in-weeks-sources-say/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/14/f7abfe6f-d0ec-4b31-a913-65ad0887ba65/thumbnail/1200x630/b2ade3162b6f0349daf7fce66f1a2b1d/cbsn-fusion-israelis-tells-us-officials-gaza-offensive-should-end-in-coming-weeks-sources-tell-cbs-news-thumbnail-2527864-640x360.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
            "publishedAt": "2023-12-14T19:09:00+00:00",
            "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Epidemics inevitable as stricken Gaza continues with unsafe water supply, doctors say | CBC News",
            "description": "A lack of food, clean water and shelter have worn down hundreds of thousands of traumatized people and, with a health system on its knees, doctors and aid workers say it's inevitable epidemics will rip through the enclave.",
            "url": "http://www.cbc.ca/news/world/israel-gaza-war-disease-epidemic-inevitable-doctors-say-1.7058816",
            "urlToImage": "https://i.cbc.ca/1.7058821.1702578670!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/rafah.jpg",
            "publishedAt": "2023-12-14T19:07:27.6820347Z",
            "content": "A lack of food, clean water and shelter have worn down hundreds of thousands of traumatized people in Gaza and, with a health system on its knees, it's inevitable epidemics will rip through the encla… [+7488 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Thousands of ethnic minority Russians fled to avoid conscription. Life in their news homes hasn't been easy",
            "description": "As Russia continues to send troops to Ukraine, people from its ethnic minority regions are more likely to be conscripted and face higher death rates in battle. Thousands of them have fled to neighbouring countries to avoid that fate — but relocation comes wit…",
            "url": "https://www.cbc.ca/newsinteractives/features/ethnic-russian-migration",
            "urlToImage": "https://www.cbc.ca/newsinteractives/content/images/new-crop-russian-passport_1.jpg",
            "publishedAt": "2023-12-14T19:07:24.9952011Z",
            "content": "Last September, Russian President Vladimir Putin announced a partial mobilization of 300,000 reservists typically, men who had previously gone through the countrys mandatory conscription. \r\nThe count… [+1190 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "No peace in Ukraine until Russia's goals achieved, says Putin",
            "description": "Russian President Vladimir Putin says there will be no peace in Ukraine until the Kremlin realizes its goals, which remain unchanged, at a wide-ranging but heavily controlled end-of-year news conference.",
            "url": "http://www.cbc.ca/player/play/2292227651847",
            "urlToImage": "https://thumbnails.cbc.ca/maven_legacy/thumbnails/823/655/putin_mpx_copy.jpg",
            "publishedAt": "2023-12-14T19:07:24.4172229Z",
            "content": null
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "ANALYSIS | As Ukraine struggles with fickle allies, Vladimir Putin is on a roll | CBC News",
            "description": "As 2023 comes to a close, Vladmir Putin is capitalizing on a momentum shift in his war on Ukraine. With Ukraine’s President fighting to keep his country’s lifeline of military and humanitarian open, Putin ticks off some modest, but nonetheless significant win…",
            "url": "http://www.cbc.ca/news/multi-lineup-listing/as-ukraine-struggles-with-fickle-allies-vladimir-putin-is-on-a-roll-1.7054522",
            "urlToImage": "https://i.cbc.ca/1.7054534.1702143349!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/ukraine-crisis-poland-border.JPG",
            "publishedAt": "2023-12-14T19:07:23.3372865Z",
            "content": "Eternally long lines of stalled transport trucks at Ukraine's border with Poland may be an apt metaphor for broader frustrations and challenges facing the war-weary nation as 2023 winds down.\r\nA bloc… [+8750 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "ANALYSIS | Ukrainian leader's rude awakening: In Washington, his country's destiny is a bargaining chip | CBC News",
            "description": "The leader of Ukraine has visited a place where his country's destiny is a bargaining chip: Washington. It comes as vital U.S. military aid is now caught up in partisan bargaining, and it's about to expire.",
            "url": "http://www.cbc.ca/news/world/zelenskyy-washington-dc-visit-funding-analysis-1.7057334",
            "urlToImage": "https://i.cbc.ca/1.7057342.1702432014!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/ukraine-crisis-usa-zelenskiy.JPG",
            "publishedAt": "2023-12-14T19:07:20.0091444Z",
            "content": "A U.S. senator looked at Ukraine's president in a meeting and informed him: This problem is nothing personal.\r\nHe was referring to the potential expiry of American military support  tens of billions … [+7138 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Haley Ott",
            "title": "Putin says at news conference he hopes to \"find a solution\" on Americans Evan Gershkovich, Paul Whelan",
            "description": "Vladimir Putin held his first end-of-year news conference since Russia invaded Ukraine in early 2022.",
            "url": "https://www.cbsnews.com/news/putin-news-conference-evan-gershkovich-paul-whelan-ukraine-war-russia/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/14/c93dfe9f-5049-449b-bcb9-a9ae52791624/thumbnail/1200x630g2/472fcd07ad103bc769b6586f080df6aa/gettyimages-1847546822.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
            "publishedAt": "2023-12-14T18:43:26+00:00",
            "content": "Russian President Vladimir Putin said Moscow was in talks with the United States over detained Americans Evan Gershkovich and Paul Whelan. In his end-of-year news conference on Thursday, Putin said h… [+3584 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Israel-Gaza latest news: Israel says 70 fighters arrested at Gaza hospital; Hamas says medical care blocked",
            "description": "Israel says the fighters \"surrendered\" at the northern hospital, as fighting continues in the territory.",
            "url": "http://www.bbc.co.uk/news/live/world-middle-east-67709805",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
            "publishedAt": "2023-12-14T18:37:25.9311444Z",
            "content": "The head of the UNs agency for Palestinian refugees (UNRWA) has described extremely difficult conditions in Rafah in southern Gaza, following a recent visit to the Strip. \r\nPhilippe Lazzarini explain… [+1265 chars]"
        },
        {
            "source": {
                "id": "der-tagesspiegel",
                "name": "Der Tagesspiegel"
            },
            "author": "Cay Dobberke",
            "title": "Berliner Wahrzeichen bald wieder komplett: Stern auf dem Europacenter soll wie früher rotieren und leuchten",
            "description": "Aktuelles und Hintergründiges in unserem meistgelesenen Berliner Bezirksnewsletter, immer freitags aus Charlottenburg-Wilmersdorf.",
            "url": "https://www.tagesspiegel.de/berlin/bezirke/berliner-wahrzeichen-bald-wieder-komplett-stern-auf-dem-europacenter-soll-wie-fruher-rotieren-und-leuchten-10930327.html",
            "urlToImage": "https://www.tagesspiegel.de/images/c9yc06c9jpg/alternates/BASE_16_9_W1400/c9yc06c9jpg.jpeg",
            "publishedAt": "2023-12-14T18:35:59+00:00",
            "content": "Unsere Newsletter bringen Ihnen, liebe Leserinnen, liebe Leser, Nachrichten aus den zwölf Berliner Bezirken und wurden inzwischen berlinweit rund 286.000 Mal abonniert. Mit mehr als 39.000 Abos ist C… [+2079 chars]"
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "ABC News",
            "title": "Kathleen Folbigg to seek biggest compensation in Australian history - ABC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDIzLTEyLTE1L25zdy1rYXRobGVlbi1mb2xiaWdnLWNvbXBlbnNhdGlvbi1leC1ncmF0aWEvMTAzMjMwNzY40gEoaHR0cHM6Ly9hbXAuYWJjLm5ldC5hdS9hcnRpY2xlLzEwMzIzMDc2OA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-12-14T18:25:04+00:00",
            "content": null
        },
        {
            "source": {
                "id": "google-news-uk",
                "name": "Google News (UK)"
            },
            "author": "Euronews",
            "title": "EU approves accession talks with Ukraine and Moldova as Orbán abstains - Euronews",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LmV1cm9uZXdzLmNvbS9teS1ldXJvcGUvMjAyMy8xMi8xNC9ldS1ncmVlbmxpZ2h0cy1hY2Nlc3Npb24tdGFsa3Mtd2l0aC11a3JhaW5lLWFuZC1tb2xkb3Zh0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-12-14T18:22:30+00:00",
            "content": null
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Trucker who caused Humboldt Broncos crash loses latest bid to stay in Canada | CBC News",
            "description": "A federal judge has dismissed applications from the truck driver who caused the deadly Humboldt Broncos bus crash in Saskatchewan and was fighting deportation back to India.",
            "url": "http://www.cbc.ca/news/canada/saskatchewan/humboldt-truck-driver-deportation-1.7059282",
            "urlToImage": "https://i.cbc.ca/1.6671231.1682008887!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/sask-bus-crash-20221201.JPG",
            "publishedAt": "2023-12-14T18:22:19.7915021Z",
            "content": null
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "CBC News Explore",
            "description": "CBC News Explore takes you beyond the headlines to explain and experience the news with our journalists in Canada and the world.",
            "url": "https://www.cbc.ca/news/cbc-news-explore-1.6512577",
            "urlToImage": "https://thumbnails.cbc.ca/maven_legacy/thumbnails/976/659/Explore-ALT-Logo-Poster-2880x1620.jpg",
            "publishedAt": "2023-12-14T17:52:24.6192412Z",
            "content": null
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "ANALYSIS | Putin aims for show of power and reassurance as war in Ukraine appears at stalemate | CBC News",
            "description": "Russian President Vladimir Putin is keen to manage any brewing discontent ahead of next March’s presidential election and used his year-end news conference Thursday to try to show he is best to steer the country and its war in Ukraine, experts say.",
            "url": "http://www.cbc.ca/news/world/putin-news-conference-1.7058952",
            "urlToImage": "https://i.cbc.ca/1.7058960.1702565578!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/russia-putin.jpg",
            "publishedAt": "2023-12-14T17:52:19.8377612Z",
            "content": "When Russian President Vladimir Putin answered questions for more than four hours during a marathon session broadcast live Thursday\r\n on all major television channels in the country, he was in the ty… [+6457 chars]"
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": "CTV News",
            "title": "Ukraine news: 244,000 Russian troops on battlefield, Putin says - CTV News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5jdHZuZXdzLmNhL3dvcmxkL2FuLWVtYm9sZGVuZWQtY29uZmlkZW50LXB1dGluLXNheXMtdGhlcmUtd2lsbC1iZS1uby1wZWFjZS1pbi11a3JhaW5lLXVudGlsLXJ1c3NpYS1zLWdvYWxzLWFyZS1tZXQtMS42Njg2Nzky0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-12-14T17:44:27+00:00",
            "content": null
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "9News",
            "title": "UK boy who went missing in Spain found six years later in France, authorities say - 9News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMilQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvd29ybGQvYWxleC1iYXR0eS1mb3VuZC1pbi1mcmFuY2Utc2l4LXllYXJzLWFmdGVyLWRpc2FwcGVhcmFuY2UtaW4tc3BhaW4tYXV0aG9yaXRpZXMtc2F5LzczNjc3ODQ0LWMyZDAtNDQ4Mi1iNTVmLTYyYzBjNWNjODQ4NNIBRWh0dHBzOi8vYW1wLjluZXdzLmNvbS5hdS9hcnRpY2xlLzczNjc3ODQ0LWMyZDAtNDQ4Mi1iNTVmLTYyYzBjNWNjODQ4NA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-12-14T17:39:07+00:00",
            "content": null
        },
        {
            "source": {
                "id": "handelsblatt",
                "name": "Handelsblatt"
            },
            "author": null,
            "title": "+++ Ukraine-Krieg +++: Selenski besucht US-Europa-Hauptquartier in Wiesbaden",
            "description": "Nato erhöht gemeinsames Militärbudget 2024 um zwölf Prozent +++ Russland beschießt Westukraine mit Hyperschallraketen +++ Der Newsblog.",
            "url": "https://www.handelsblatt.com/politik/international/ukraine-krieg-selenski-besucht-us-europa-hauptquartier-in-wiesbaden/27982126.html",
            "urlToImage": null,
            "publishedAt": "2023-12-14T17:32:38+00:00",
            "content": "Nato erhöht gemeinsames Militärbudget 2024 um zwölf Prozent +++ Russland beschießt Westukraine mit Hyperschallraketen +++ Der Newsblog."
        }
    ]
    constructor(){
        super();

        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            console.log(element);
                           return <div className='col-lg-3 mt-5'>
                           <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.imgUrl} />
                       </div> 
                        })}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default News;