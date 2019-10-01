# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
teaList = [
	[
		"White",
		"/white-tea.jpeg",
		"White tea is harvested before the tea plant’s leaves open fully, when the young buds are still covered by fine white hairs."
	],
	[
		"Green",
		"/green-tea.jpeg",
		" Green tea is high in antioxidants that can improve the function of your body."
	],
	[
		"Oolong",
		"/Oolong-tea.jpeg",
		"Oolong is neither a black tea nor a green tea; it falls into its own category of tea. "
	],
	[
		"Black",
		"/black-tea.jpeg",
		"Sun tea, sweet tea, iced tea, afternoon tea, English Breakfast, Earl Grey… are typically made using black tea leaves."
	],
	[
		"Pu-erh",
		"/puh-er.jpeg",
		"Tea lovers with a taste for exotic varieties may be familiar with pu-erh tea, a brew prized for its rich flavor."

	],
	[
		"Herbal",
		"/herbal-tea.jpeg",
		"Herbal tea is essentially anything that doesn’t contain leaves from the tea plant, Camellia sinensis." 
	],
	[
		"Jasmine",
		"/jasmine-tea.jpeg",
		"Jasmine tea is a type of tea, scented with the aroma of blossoms from the jasmine plant."
	]

]

teaList.each do |name,photo_url,description|
	Tea.create(name: name, photo_url: photo_url, description: description)
	end

types = ["Scented & Blende", "Traditional",
		"Chinese Green Tea","Japanese Green Tea",
		"Indian Green Tea", "Blue People Oolongs",
		"Gingseng Oolongs","Anxi Oolongs",
		"Wu Yi Oolongs","Phoenix Oolongs",
		"Formasa Oolongs", "Loose Leaf","Cake, Bricks & Touchas"]
types.each do |name|
	Type.create(name: name)
	end
products_name = [
	[
		"Ruby Red Tea",
		"/black/ruby.jpg",
		"Check out our new in stock Formosa Ruby Red AKA  Black Tea from Taiwan's Sun Moon Lake. Related to the Burmese Assamica tea leaf varietal, Ruby Red #18 is a rare and unique black tea. The flavor and bouquet of this tea is deeply floral, with a sweet cinnamon quality to it, followed with the prominent Taiwanese velvety and complex lingering aftertaste!",
		 60.00,
		 4,
		  1
	],
	[
		"Chai Tea",
		"/black/chai.jpg",
		"Warm up with our Masla Chai! It's the perfect tea for this Holiday season! It's a perfect blend of Assam Black Tea, Ginger, Cinnamon, Cloves, Cardamom! Order online or visit the stores to try it!", 
		17.00,
		4, 
		1
	],
	[
		"Ginger Black Tea",
		"/black/gingerBlack.jpg",
		"This is a Keemun black scented naturally with red ginger. The flavor is smooth and is reminiscent of Chinese ginger candies.",
		 35.00, 
		 4, 
		 1
	],

	[
		"Blueberry Green Tea",
		"/green/blueberry.jpg",
		"Blueberry Bancha Green Tea! Organic Bancha blended with Organic dried blueberries. It has the perfect balanced flavor of a rich green tea taste with the sweet and fruity taste of blueberries. Great for making a cool and refreshing iced tea! ", 
		25.00, 
		2, 
		1
	],
	[
		"Coconut Paradise Green Tea",
		"/green/coconutParadise.jpg",
		"Being scented and blended with real coconut shavings, our Coconut Paradise green tea will definitely transport you to a coconut island resort. The flavor is rich with coconut and is naturally sweet tasting.", 
		11.00, 
		2, 
		1
	],
	[
		"Assam Green Tea",
		"/green/greenAssam.jpg",
		"Check out our newly imported Super Twist Green Assam, from the Chota Tingari Tea Estate in India! should be a technical tea grading term LOL! This is a rare and unique full bodied Assam Green Tea, which usually when you hear the word Assam, you might automatically associate it with Assam Black Teas. The flavor is complex with a long strong bold finish, having hints of mangoes, citrus, and cream, and DOES NOT have much grassy or vegetal flavors of your typical Sencha green tea, making it a very unique and highly enjoyable tea to sip throughout the day!", 
		22.00, 
		2, 
		1
	],
	[
		"Lychee Green Tea",
		"/green/lycheeGreen.jpg",
		"Custom made exclusively for our stores, our Lychee Green Tea is super fragrant and sweet tasting. The natural sweet lychee flavors from this tea are ideal for brewing a delicious batch of ice tea.",
		22.00, 
		2, 
		1
	],
	[
		"New Bird Tongue Tea",
		"/green/newBirdstongue.jpg",
		"New Arrival! 2019 Bird’s Tongue Green Tea from 惠州, Hui Zhou. It’s our first time sourcing this unique green tea made entirely of just the young buds. Celery-like flavor, with a strong bitter melon -like aftertaste and has one of the most strongest and longest aftertaste we’ve ever encountered in a green tea.", 
		40.00, 
		2, 
		1
	],
	[
		"Sencha Fukamashi Tea",
		"/green/senchaFukamashi.jpg",
		"Next up from our newly imported Japanese teas collection is our 2018 spring harvest  Fukamushi Sencha from Shizuoka! The  process makes a big difference in the flavor of this green tea! The longer steaming time makes the leaves very soft and during the rolling process, the tips of often break. As a result, the astringency is suppressed, while gaining more body and sweetness.", 
		12.00, 
		2, 
		1
	],
	[
		"Strawberry Green Tea",
		"/green/strawberryGreen.jpg",
		"good black tea", 
		21.00, 
		2, 
		1
	],
	[
		"White Dragon Well Tea",
		"/green/whiteDragonWell.jpg",
		"What's up my tea lovers! Check out our newest green tea, 2019 Early Fall Harvest Anji Bai Long Jing , AKA White Dragonwell! This is a very unique green tea derived from the Anji Bai Cha cultivar, and grows in Zhejiang. Although it was produced by using traditional dragon well tea making methods, the tea leaves went through less wok-drying, therefore producing a less nutty flavor profile like most dragon wells. However, the flavor and the tea broth is very creamy and savory, and has a creamed asparagus-like flavor, while the finish is nice and clean in the aftertaste! ", 
		100.00, 
		2, 
		1
	],
	[
		"Wu Yi Dragon Qu Hao Tea",
		"/green/wuyiDragon.jpg",
		"Come check out our newly harvested 2019 Wu Yi Dragon Qu Hao Green Tea! Wu Yi Qu Hao is one of the most famous green teas produced from Wu Yi mountain. Usually when you think of Wu Yi teas, the usual suspects like Big Red Robe Oolong or Jin Jun Mei black teas might come into mind, but long before these famous classics, Wu Yi was actually famous for their green teas!  which in this context, the word Qu means twisty or crooked, describes the twisty looking leaves of this tea. The flavor of this bold green tea is similar to certain Japanese green teas, but the flavors are much bolder and intense, and it also has a long and complex aftertaste! ", 
		40.00, 
		2, 
		1
	],

	[
		"Jamine Black Tea",
		"/jasmin/jasmin_black.jpg",
		"Unique custom made Yunnan black tea, roasted and blended and scented with Jasmine buds. Great for breakfast tea.", 

		12.00, 
		2, 
		1
	],
	[
		"Jasmine Green Tea",
		"/jasmin/jasmin_green.jpg",
		"Come check out our ! Our high quality classic staple Supreme Jasmine Green Tea is now on sale for just $15.00 per LB! Our Supreme Jasmine Green Tea is made from high quality green tea leaves that went through an intense Jasmine scenting process, and was repeatedly scented with fresh Jasmine flowers for up to five times! This is a great tea for pairing with dim sum, or use it to make your very own Jasmine boba milk tea at home!", 
		12.00, 
		2, 
		1
	],
	[
		"Jasmine Phoenix Tea",
		"/jasmin/jasmin_phoenix.jpg",
		"good black tea", 
		12.00, 
		2, 
		1
	],
	[
		"Jasmine White Tea",
		"/jasmin/jasmin_white.jpeg",
		"good black tea", 
		12.00, 
		2, 
		1
	],
	[
		"Jasmine Bancha Tea",
		"/jasmin/jasmine_bancha.jpeg",
		"Being a new take on Jasmine teas, our Japanese Bancha green tea is blended with fresh Jasmine buds, which is great for those who want a more green tea taste, followed with the jasmine in the aftertaste.", 
		25.00, 
		2, 
		1
	],

	[
		"Chrysanthemum Tea",
		"/herbal/chrysanthemum.jpg",
		"It is one of China ’s most popular Herbal teas. This tea is well-known for its cooling properties that help to decrease body heat and is recommended for those with fever, sore throat, and other heat-related illnesses.", 
		27.00, 
		6, 
		1
	],
	[
		"Lavender Tea",
		"/herbal/lavender.jpg",
		"Great before bed time, our fresh organic Lavender tea is perfect for those who like fragrant and aromatic things. It tastes the way it smells. It is usually drank to help sleeping restfully and in aiding digestion.", 
		12.00,
		6, 
		1
	],
	[
		"Osmanthus Tea",
		"/herbal/osmanthus.jpg",
		"Dispels cold and dampness in the body. Wonderful for treating colds, they can get decrease the mucus caused by inflamed lungs and reduce coughing. Improves overall lung health. Treats menstrual pain, as well as regular stomach pain. Treats tooth aches Warms stomach, improves digestion, treats intestinal diseases and reduces the amount of stomach gas. Used to tranquilise an active liver. Removes many toxins from the body. ", 
		35.00, 
		6, 
		1
	],
	[
		"Peppermint Tea",
		"/herbal/peppermint.jpg",
		"Tis the season minty! Freshen up with our Peppermint Herbal tea grown in Oregon. Really Fresh! Really Minty! ", 
		12.00, 
		6, 
		1
	],
	[
		"Pink Rose Tea",
		"/herbal/pink_rose.jpg",
		"Rose tea, also sometimes known as rose bud tea, is made from whole, dehydrated rose blossoms. These delicate pink flowers make a fragrant brew that is light-tasting, fruity and low in calories.  Rose tea can help relieve menstrual cramps and is rich in natural antioxidants.", 
		27.00, 
		6, 
		1
	],
	[
		"Roasted Buckwheat Tea",
		"/herbal/roastedBuckwheat.jpg",
		"Sobaroasted buckwheat is a traditional Japanese specialty that is prepared as you would an herbal tisane. It is naturally caffeine free, with a delightful toasty flavor and nutty undertones.",

 
		12.00, 
		6, 

		1],
	[
		"Tropical Rooibos Tea",
		"/herbal/tropicalRooibos.jpg",
		"This is our very own custom blended Tropical Rooibos tea, which is naturally sweet, and blended with natural mango and pineapple flavors, with marigold, rose petals, and passion flowers. This is perfect for making iced tea and is naturally decaffeinated.",

 
		45.00, 
		6, 
		1
	],

	[
		"Iron Warrior Monk Tea",
		"/Oolong/ironWarriorMonk.jpg",
		"Feel the power of our newly in stock Wu Yi Iron Warrior Monk Oolong, AKA Tie Lou Han", 
		60.00, 
		3, 
		1
	],
	[
		"Pure Dragon Iron Goddess Tea",
		"/Oolong/pureIron.jpeg",
		"This is basically an Anxi Tieguanyin cultivar planted in Muzha of Wen Shan District, Taiwan. It has a deep rum-like aroma, with the high and bright fruit notes of muscatel grapes, and finishes off with spicy mild tannins. This is definitely a very tasty and complex oolong and one of Taiwan's best teas!", 
		12.00, 
		3, 
		1
	],
	[
		"Da Yu Ling Tea",
		"/Oolong/dayuling.jpg",
		"This is basically an Anxi Tieguanyin cultivar planted in Muzha of Wen Shan District, Taiwan. It has a deep rum-like aroma, with the high and bright fruit notes of muscatel grapes, and finishes off with spicy mild tannins. This is definitely a very tasty and complex oolong and one of Taiwan's best teas!", 
		12.00, 
		3, 
		1
	],
	[
		"Duck Shit Tea",
		"/Oolong/duckshit.jpg",
		"This is basically an Anxi Tieguanyin cultivar planted in Muzha of Wen Shan District, Taiwan. It has a deep rum-like aroma, with the high and bright fruit notes of muscatel grapes, and finishes off with spicy mild tannins. This is definitely a very tasty and complex oolong and one of Taiwan's best teas!", 
		12.00, 
		3, 
		1
	],
	[
		"American Gingeng Oolong Tea",
		"/Oolong/americanGingseng.jpg",
		"good black tea", 
		12.00, 
		3, 
		1
	],
	[
		"Ben Shan Oolong Tea",
		"/Oolong/benshan.jpeg",
		"This is basically an Anxi Tieguanyin cultivar planted in Muzha of Wen Shan District, Taiwan. It has a deep rum-like aroma, with the high and bright fruit notes of muscatel grapes, and finishes off with spicy mild tannins. This is definitely a very tasty and complex oolong and one of Taiwan's best teas!", 
		12.00, 
		3, 
		1
	],
	[
		"Blue People Oolong Tea",
		"/Oolong/bluePeople.jpg",
		"This is the most intense, the most delicious, the sweetest, and the most complex of all the Blue People Oolongs! This is our own original customized recipe, produced with high grade Taiwanese Oolong, heavy amounts of ginseng and liquorice root.", 
		12.00, 
		3, 
		1
	],
	[
		"Chai Oolong Tea",
		"/Oolong/chai.jpg",
		"good black tea", 
		12.00, 
		3, 
		1
	],
	[
		"Cinnamon Roasted Oolong Tea",
		"/Oolong/cinnamonRoasted.jpg",
		"Here's our custom made Cinnamon Roasted Wu Yi Oolong for our Autumn Tea Collection! It's scented with real cinnamon and blended with actual cinnamon chips. It definitely has a sweet cinnamon flavor balanced off with a toasty and roasted Oolong tea flavor. ",

 
		12.00, 
		3, 
		1
	],
	[
		"Ginseng Dong Ding Tea",
		"/Oolong/gingsengDongDing.jpg",
		"Using some of the most finest high mountain Dong Ding oolong avaiable from Nantou County, Taiwan, this delicious and very refreshing oolong tea has the combination of the buttery, nutty, and savory flavors of a high quality Dong Ding Oolong, combined with the strong and sweet flavors of ginseng, which leaves an incredible sweet aftertaste in the back of your mouth. ",

 
		12.00, 
		3, 
		1

	],
	[
		"Honey Orchid Dancong Tea",
		"/Oolong/honeyOrchid.jpg",
		"This 2018 Spring Harvest Mi Lan Xiang Honey Orchid Phoenix Oolong was made just not so long ago in the middle of March and was exclusively made just for us! Made with the youngest 1st Flush Spring tea leaves, the flavors are absolutely amazing! Extremely fragrant with strong lychee, honey, and orchid aromas, the aftertaste is amazingly sweet and fruity, with a long and lingering finish! Don't miss out on this one!",

 
		12.00, 
		3, 
		1
	],
	[
		"Jasmin Green Oolong Tea",
		"/Oolong/jasminGreen.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Korean Gingeng Oolong Tea",
		"/Oolong/koreanGingseng.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Lychee Blue People Oolong Tea",
		"/Oolong/lycheeBlue.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Muscate Oolong Tea",
		"/Oolong/muscat.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Muzha Tieguanyin Oolong Tea",
		"/Oolong/muzha.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Rose Oolong Tea",
		"/Oolong/roseOolong.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Supreme Osmanthus Oolong Tea",
		"/Oolong/osmanthusOolong.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Tong Mu Village Black Tea",
		"/Oolong/tongmuVillage.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		3, 
		1
	],
	[
		"Under the Table Oolong Tea",
		"/Oolong/undertable.jpg",
		"The initial aroma is deeply fresh, grassy, bright, and vegetal, like the smell of fresh spinach, followed with the strong fragrant aroma of lilacs, gardenias, and finally you smell that sour and zesty aroma of sour cream potatoes. Yes, we actually think it smells like sour cream potatoes! ", 
		12.00, 
		3, 

	],

	[
		"White Fur Silver Needle King Tea",
		"/white/whitefurKing.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		1, 
		1
	],
	[
		"Peach Mo Mo White Tea",
		"/white/peachWhite.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		1, 
		1
	],
	[
		"Tropical Passion White Tea",
		"/white/tropicalPassionWhite.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.", 
		12.00, 
		1, 
		1
	],
	[
		"White Fur Needle Cake Front Tea",
		"/white/whitefurCake.jpg",
		"This jasmine pearl tea is amazingly fresh! It has a strong floral jasmine aroma, a creamy texture, followed with a bold green tea flavor and body.",
		 12.00, 
		 1, 
		 1
	],

]


products_name.each do |name, photo_url, description, price, tea_id, type_id|
	Product.create(name: name, photo_url: photo_url, description: description, price: price, tea_id: tea_id, type_id: type_id)
			
	end



	