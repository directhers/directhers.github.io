const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
    const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
    const imgBox = document.getElementById("imgBox");
    const name = document.getElementById("name");
    const citation = document.getElementById("citation");
    const description = document.getElementById("description");

    let people = [{
        photo: 'url("https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg")',
        name: "Rea Tajiri",
        citation: "Director Q&A with Rea Tajiri, YouTube",
        description: "Rea Tajiri is a Japanese American filmmaker, educator, interdisciplinary artist, and screenwriter. She was born in 1958 in Chicago, Illinois and attended the California Institute of the Arts where she received her BFA and MFA in post-studio art. Her career started as a video artist when she moved to New York and got involved in The Kitchen art center. Her early video artwork was included in the 1989, 1991 and 1993 Whitney Biennials. In 1991 she released History and Memory: For Akiko & Takashige a personal documentary essay about the Japanese American Internment which received the Distinguished Achievement Award from the International Documentary Association. Her debut feature film Strawberry Fields about a Japanese American women in 1970s Chicago won the Grand Prix at the Fukuoka Asian Film Festival. Tajiri currently works as an Associate Professor at Temple University and has been a visiting filmmaker at numerous institutions including University of Colorado Boulder, School of the Art Institute of Chicago, University of California Santa Barbara, among others."
      },
      {
        photo: "url('https://upload.wikimedia.org/wikipedia/commons/4/48/Premios_Goya_2018_-_Nicolas_van_Hemelryck%2C_Valerie_Meikle_y_Clare_Weiskopf_%28Amazona%29.jpg')",
        name: "Clare Weiskopf",
        citation: "Clare Weiskopf @Carlos Delgado, CC-BY-SA ",
        description: "Clare Weiskopf is a Colombian filmmaker, producer, and journalist. Weiskopf has been documenting for more than ten years social issues regarding sexual violence and Colombia’s armed conflict. Her debut film Amazona (2016) was nominated as Best Ibero-American Film at the Goya Awards. In this compelling and intimate documentary Weiskopf portrays the story of her mother, Valeria Meikle, a defiant woman who immigrated to Colombia from Britain and now resides in the Amazon jungle. Her latest film ALIS (2022) has won 23 international awards including Berlinale’s Crystal Bear and Teddy Award. ALIS recreates a fictional character constructed by a group of ten young women who live together at a shelter for teenage girls in Bogotá, Colombia. They collectively imagine a new classmate, Alis, and tell her story while dealing also with their own lived experiences. Clare Weiskopf and Nicolas Van Hemelryck crafted this film while giving a series of workshops to this group of girls on filmmaking, they have termed the result a “psychological documentary” or active, creative storytelling that can deal with trauma in new ways."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372__340.jpg')",
        name: "Rakhshān Banietemad",
        citation: "Rakhshān Banietemad @ Tasnim News Agency,  CC BY 4.0",
        description: "Rakhshān Banietemad is an Iranian film director, producer and screenwriter also known as “First Lady of Iranian Cinema”. She received her BA in Film Studies from the Dramatic Arts University in Tehran and started her career doing documentary films and in 1973 joined the Iranian TV as a script supervisor. Later in 1987 she directed her first full-length Off the Limits (Kharej Az Mahdoudeh) which was received with some harsh criticism. However, in 1991 her film Nargess was critically and popularly acclaimed and won Best Director award at Fajr International Film Festival in Iran. Banietemad became its first women recipient. In 2008 she earned an honorary doctorate from University of London."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2012/10/26/02/12/actor-63082_960_720.jpg')",
        name: "Claudia Llosa",
        citation: "Claudia Llosa @Festival Internacional de Cine de Guadalajara, CC BY 2.0",
        description: "Claudia LLosa is a Peruvian-Italian film director and writer. Her Academy-Award nominated film, The Milk of Sorrow (2009) won her international recognition, including an Oscar nomination in 2010 and was awarded a Golden Bear at the Berlin Film Festival. She has also directed other acclaimed films, such as Madeinusa (2006), which won a Critics Award at the Hamburg Film Festival, and more recently wrote and produced Aloft (2014) starring Jennifer Connelly. Llosa studied Film Direction at the Univerrsity of Lima in Perú and in the late 1990s moved to Madrid to deepen her film studies. She has also represented Peruvian filmmakers at the Sundance Film Festival. LLosa is the niece of peruvian writer Mario Vargas LLosa, who won the Nobel prize in Literature in 2010."
      },
      {
        photo: 'url("https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg")',
        name: "Lucrecia Martel",
        citation: "Lucrecia Martel @Ministerio de la Cultura de la Nación Argentina, CC BY-SA 2.0",
        description: "Lucrecia Martel, born in 1966, is an Argentine film director, screenwriter, and producer known for her critically acclaimed films. Her work has been showcased at prestigious international film festivals, including Cannes, Venice, Berlin, and Toronto. Martel began her journey from the Film Art Institute of Avellaneda (IDAC) and the National Film School (ENERC) but she studied film outside of school by helping with filming and production. She initially directed shorts and documentaries, gaining recognition for her unique approach. Martel's impressive filmography, characterized by an exploration of troubled moments, features remarkable works such as La Ciénaga (2001), La niña santa (2004), and La mujer sin cabeza (2008). With her 2017 drama, Zama, Martel continues to solidify her status as a visionary auteur in both Argentine and global cinema."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_960_720.jpg')",
        name: "Alethea Arnaquq-Baril ",
        citation: "Alethea Arnaquq-Baril @Aarnaquq, CC BY-SA 4.0",
        description: "Alethea Arnaquq-Baril is an independent filmmaker living in Iqualuit, NU, Canada. She was born in May 9, 1978 to Inuk parents in Frobisher Bay, Northwest Territories, Canada (now Iqaluit, Nunavut.) Her mother was a prominent teacher and her father worked for the Canadian Broadcast Corporation (CBC). She started her university studies in mathematics but changed her focus to storytelling, which led her to study film and animation. She has been involved in many aspects of filmmaking, including directing, producing and screenwriting.  She has been involved in over 10 movies and has received 8 awards for her work, including Canada’s Meritorious Service Cross and was named one of Canada’s most important filmmakers by the Toronto Film Festival. Throughout her career, she has been focused on documenting the Inuk culture as well as being an activist towards Inuk concerns. She is an Inuit traditional tattoo enthusiast and Inuit seal hunting activist."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372__340.jpg')",
        name: "Ruth Ozeki",
        citation: "Ruth Ozeki @Latrippi, CC BY-SA 3.0",
        description: "Ruth Ozeki is an American-Canadian writer, filmmaker, and a Zen Buddhist priest.  She was born on March 12, 1956, in New Haven, Connecticut, USA to Floyd Lounsbury, an American Academic, and to linguist Masako Yokoyama, who is Japanese. At university, she studied English and Asian Studies graduating in 1980 from Smith College. Moving to New York City in 1985, she was involved in TV production for the next 3 years.  In 1988, she started to work for Telecom Staff, a Japanese production company, where she worked producing and directing documentary-style programs for Japanese television.  Her first film, Body of Correspondence, 1994, was critically acclaimed.  She made her second movie in 1995 and has written numerous books, for which she has won numerous awards.  She is respected for her ability to integrate issues of science, technology, religion, environmental politics, and pop culture into unique, hybrid, narrative forms in her work. Presently, she teaches creative writing at Smith College. She splits her time between Western Massachusetts, New York City, and British Columbia, Canada."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2012/10/26/02/12/actor-63082_960_720.jpg')",
        name: "Lulu Wang",
        citation: "Lulu Wang @MiamiFilmFestival, CC BY-SA 2.0",
        description: "Lulu Wang is a Chinese American director and writer. She was born in Beijing, China, in 1983 and moved to Miami, Florida, with her parents at six. She double majored in literature and music at Boston College but later considered film her profession and passion. She began her career in documentary and later transitioned to Hollywood in 2008. In 2014, she produced her first feature film, Posthumous. Her second feature film, The Farewell, premiered at the 2019 Sundance Film Festival and received worldwide recognition and awards, such as the Independent Spirit Award for Best Feature at the 35th Independent Spirit Awards. The Farewell is based on her family’s story and communicates Asian immigrant experiences in its narrative. She has also written and produced several short films and music videos. Her most recent work is an upcoming TV series named Expats on Amazon Prime Video."
      },
      {
        photo: 'url("https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg")',
        name: "Kayo Hatta",
        citation: "Asian CineVision",
        description: "Kayo Hatta was a Japanese American director, writer, and activist. She was born in Honolulu, Hawaii, in 1958 and grew up in New York. She studied English at Stanford University and obtained a master’s degree in film from UCLA. She was famous for directing and co-writing Picture Bride, her first feature film about immigrants’ lives on Hawaiian sugarcane plantations. She also produced a 30-minute short film titled Fishbowl, a story about growing up adapted from Lois-Ann Yamanaka’s novel. Unfortunately, she accidentally drowned in the San Diego area at 47 and never made another feature film before her death."
      },
      {
        photo: "url('https://www.facebook.com/SproutYoonGaeun/photos/a.450309225302185/450315081968266/')",
        name: "Yoon Ga-eun",
        citation: "Yoon Ga-eun Facebook Fan Page",
        description: "Yoon Ga-eun is a South Korean film director and screenwriter. She was born in 1982 and graduated from Sogang University and Korea National University of Arts. She made her directorial debut with The Taste of Salvia (2009) and directed several short films (Proof in 2010, and Sprout in 2013) in the following years, bringing her awards and international recognition. Her first feature film, The World of Us (2016), a coming-of-age story, was shown in Generation Kplus of the Berlin International Film Festival and won her the Best New Director at the 37th Blue Dragon Film Awards. Her second feature film, The House of Us (2019), also focuses on the themes of childhood, adolescence, and identity issues."
      },
      {
        photo: "url('https://commons.wikimedia.org/wiki/File:KirstenTanTIFF2017.jpg')",
        name: "Kirsten Tan",
        citation: "Kirsten Tan@Ykaisejp, CC BY 4.0",
        description: "Kirsten Tan, a Singaporean film director based in the United States, was born in Singapore and has since resided in South Korea, Thailand, and now New York. She obtained her Master's degree in film production from New York University. Beginning her career in 2005 with short films, Tan made her debut feature film, Pop Aye, in 2017, for which she also wrote the screenplay. The film received a Special Jury Prize for Screenwriting at the Sundance Film Festival. In addition to her film work, Tan has also directed commercial content for branding purposes and co-founded the Asian Film Archive, a Singapore-based non-governmental organization dedicated to supporting and preserving Asia's film heritage."
      },
      {
        photo: "url('https://cdn.pixabay.com/photo/2012/10/26/02/12/actor-63082_960_720.jpg')",
        name: "Kim Bora",
        citation: "Kim Bora @MEDE_TEMP,   CC BY-SA 3.0",
        description: "Kim Bora is a South Korean film director, screenwriter, and producer. She was born in South Korea in 1981 and graduated from Dongguk University and Columbia University with degrees in film. Before her feature-length debut, she directed several short films, including Another Wonderland (2002) and The Recorder Exam (2011). She is famous for her debut feature film House of Hummingbird (2018), an authentic portrayal of a young girl’s coming-of-age journey in the 1990s. House of Hummingbird won numerous awards at multiple international film festivals, including the Special Mention at the 9th Beijing International Film Festival, Best Film (Crystal Bear for Generation 14plus) at the 69th Berlin International Film Festival, and Best Director at the 56th Baeksang Arts Awards."
      },
      {
        photo: 'url("https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg")',
        name: "Suzana Amaral",
        citation: "Image C-BY-SA, Wikipedia",
        description: "Suzana Amaral was born on March 28, 1932 in  Sao Paulo, Brazil.  She was married at age 20 and was a mother for the next 10 years. Bearing 9 children during those years.  Growing up she was surrounded by an artistic community, including her brother who is an artist and her sister who is a museum director. When she was 37, she attended the University of Sao Paulo film school. Afterwards, she continued for her Master’s Degree at NYU.  After graduating she taught at the  University for 3 years, and then  she went to work for  Radio and Television Cultura, where she worked for 14 years producing about 50 documentaries, films and plays for the station. Her first feature film, A Hora da Estrela, about a troubled young protagonist upended many stereotypes and was critically acclaimed winning many awards. She directed 8 feature films before she died on June 25, 2020."
      },
      {
        photo: "url('https://en.wikipedia.org/wiki/Shamim_Ara#/media/File:Shamim_Ara.jpg')",
        name: "Shamim Ara",
        citation: "Image Fair Use: WP:NFCC#3",
        description: "Shamim Ara was a Pakistani film actor, director and producer.  She was born on March 22, 1938 as Putli Bai in Aligrath, British  India. Her father's name was Syed Ali Ahmad, but her mother’s name is not known. Her mother was a dancer who aspired to be an actor but did not succeed.  She trained Shamim to dance before she died while Shamim was young.  Her maternal grandmother's name was Iqbal Begum and was instrumental in developing Shamim Ara's film career in Pakistan after her mother's death.  In 1956, while visiting Karachi with her family, she met famed film director, Najam Naqui, who put her in his next film. At this point she changed her name from Putli to Shamim. She was married four times and had a son, her only child, with her second husband.  Shamim was involved with over 70 movies, 17 of which were in the capacity of director. She passed away on August 5, 2016."
      },
      {
        photo: "url('https://upload.wikimedia.org/wikipedia/commons/0/0e/Shonali_Bose_2.jpg')",
        name: "Shonali Bose",
        citation: "Image CC BY3.0 Bollywood Hungama",
        description: "Shonali Bose was born on June 3, 1965 in Calcutta, West Bengal.  She grew up mostly in Mumbai and New Delhi.  While studying Political Science at Delhi’s Jawaharlal Nehru University (JNU), she lost her mother. With the death of her mother, Shonali finished her BA but decided not to pursue her original goal of teaching.  She did, however, continue studying Political Science at Columbia University.  While at Columbia, she enrolled in a short filmmaking course at NYU and was transfixed, so much so that she changed her career path towards filmmaking. During that time,  Shonali was married to scientist-turned-film-maker Bedabrata Painand and had two sons.  One of her sons died at the age of sixteen which upended here world causing her to separate from her husband and begin a long term relationship with a woman. Always driven by the issues she holds dearly, she has pursued her filmmaking with a deep focus on story telling. Her themes reverberate around laughing at loss and embracing life and movies.  She believes that film is an excellent outlet for activism concerning social and political issues."
      }
    ];

    // set the first person
    imgBox.style.backgroundImage = people[0].photo;
    name.innerText = people[0].name;
    citation.innerText = people[0].citation;
    description.innerText = people[0].description;
    let currentPerson = 0;

    //Select the side where you want to slide
    function slide(side, personNumber) {
      let reviewWrapWidth = reviewWrap.offsetWidth + "px";
      let descriptionHeight = description.offsetHeight + "px";
      //(+ or -)
      let side1symbol = side === "left" ? "" : "-";
      let side2symbol = side === "left" ? "-" : "";

      setTimeout(() => {
        imgBox.style.backgroundImage = people[personNumber].photo;
      }, 0);
      setTimeout(() => {
        description.style.height = descriptionHeight;
      }, 100);
      setTimeout(() => {
        name.innerText = people[personNumber].name;
      }, 200);
      setTimeout(() => {
        citation.innerText = people[personNumber].citation;
      }, 300);
      setTimeout(() => {
        description.innerText = people[personNumber].description;
      }, 400);
    }

    function setNextCardLeft() {
      if (currentPerson === 14) {
        currentPerson = 0;
        slide("left", currentPerson);
      } else {
        currentPerson++;
      }

      slide("left", currentPerson);
    }

    function setNextCardRight() {
      if (currentPerson === 0) {
        currentPerson = 14;
        slide("right", currentPerson);
      } else {
        currentPerson--;
      }

      slide("right", currentPerson);
    }

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);


