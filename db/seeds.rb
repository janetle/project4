# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
teaList = ["White","Green","Oolong","Black","Pu-eh","Herbal","Jasmin"]
teaList.each do |name|
	Tea.create(name: name)
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
	["Ruby Red Tea","/black/ruby.jpg","good black tea", 60.00, 4, 1],
	["Chai Tea","/black/chai.jpg","good black tea", 12.00, 4, 1],
	["Ginger Black Tea","/black/gingerBlack.jpg","good black tea", 12.00, 4, 1],

	["Blueberry Green Tea","/green/blueberry.jpg","good black tea", 12.00, 2, 1],
	["Coconut Paradise Green Tea","/green/coconutParadise.jpg","good black tea", 12.00, 2, 1],
	["Assam Green Tea","/green/greenAssam.jpg","good black tea", 12.00, 2, 1],
	["Lychee Green Tea","/green/lycheeGreen.jpg","good black tea", 12.00, 2, 1],
	["New Bird Tongue Tea","/green/newBirdstongue.jpg","good black tea", 12.00, 2, 1],
	["Sencha Fukamashi Tea","/green/senchaFukamashi.jpg","good black tea", 12.00, 2, 1],
	["Strawberry Green Tea","/green/strawberryGreen.jpg","good black tea", 12.00, 2, 1],
	["White Dragon Well Tea","/green/whiteDragonWell","good black tea", 12.00, 2, 1],
	["Wu Yi Dragon Qu Hao Tea","/green/wuyiDragon","good black tea", 12.00, 2, 1],

	["Jamin Black Tea","/jasmin/jasmin_black.jpg","good black tea", 12.00, 2, 1],
	["Jasmin Green Tea","/jasmin/jasmin_green.jpg","good black tea", 12.00, 2, 1],
	["Jasmin Phoenix Tea","/jasmin/jasmin_phoenix.jpg","good black tea", 12.00, 2, 1],
	["Jasmin White Tea","/jasmin/jasmin_white.jpg","good black tea", 12.00, 2, 1],
	["Jasmin Bancha Tea","/jasmin/Jasmin_bancha.jpg","good black tea", 12.00, 2, 1],

	["Chrysanthemum Tea","/herbal/chrysanthemum.jpg","good black tea", 12.00, 6, 1],
	["Lavender Tea","/herbal/lavender.jpg","good black tea", 12.00, 6, 1],
	["Osmanthus Tea","/herbal/osmanthus.jpg","good black tea", 12.00, 6, 1],
	["Peppermint Tea","/herbal/peppermint.jpg","good black tea", 12.00, 6, 1],
	["Pink Rose Tea","/herbal/pink_rose.jpg","good black tea", 12.00, 6, 1],
	["Roasted Buckwheat Tea","/herbal/roastedBuckwheat.jpg","good black tea", 12.00, 6, 1],
	["Tropical Rooibos Tea","/herbal/tropicalRooibos,jpg","good black tea", 12.00, 6, 1],

	["Ion Warrior Monk Tea","/Oolong/ironWarriorMonk.jpg","good black tea", 12.00, 3, 1],
	["Pure Dragon Iron Goddess Tea","/Oolong/pureIron.jpg","good black tea", 12.00, 3, 1],
	["Da Yu Ling Tea","/Oolong/dayuling.jpg","good black tea", 12.00, 3, 1],
	["Duck Shit Tea","/Oolong/duckshit.jpg","good black tea", 12.00, 3, 1],
	["American Gingeng Oolong Tea","/Oolong/americanGingseng.jpg","good black tea", 12.00, 3, 1],
	["Ben Shan Oolong Tea","/Oolong/benshan.jpeg","good black tea", 12.00, 3, 1],
	["Blue People Oolong Tea","/Oolong/bluePeople.jpg","good black tea", 12.00, 3, 1],
	["Chai Oolong Tea","/Oolong/chai.jpg","good black tea", 12.00, 3, 1],
	["Cinnamon Roasted Oolong Tea","/Oolong/cinnamonRoasted.jpg","good black tea", 12.00, 3, 1],
	["Gingeng Dong Ding Tea","/Oolong/gingsengDongDing.jpg","good black tea", 12.00, 3, 1],
	["Honey Orchid Dancong Tea","/Oolong/honeyOrchid.jpg","good black tea", 12.00, 3, 1],
	["Jasmin Green Oolong Tea","/Oolong/jasminGreen.jpg","good black tea", 12.00, 3, 1],
	["Korean Gingeng Oolong Tea","/Oolong/koreanGingseng.jpg","good black tea", 12.00, 3, 1],
	["Lychee Blue People Oolong Tea","/Oolong/lycheeBlue.jpg","good black tea", 12.00, 3, 1],
	["Muscate Oolong Tea","/Oolong/muscat.jpg","good black tea", 12.00, 3, 1],
	["Muzha Tieguanyin Oolong Tea","/Oolong/muzha.jpg","good black tea", 12.00, 3, 1],
	["Rose Oolong Tea","/Oolong/roseOolong.jpg","good black tea", 12.00, 3, 1],
	["Supreme Osmanthus Oolong Tea","/Oolong/osmanthusOolong.jpg","good black tea", 12.00, 3, 1],
	["Tong Mu Village Black Tea","/Oolong/tongmuVillage.jpg","good black tea", 12.00, 3, 1],
	["Under the Table Oolong Tea","/Oolong/undertable.jpg","good black tea", 12.00, 3, 1],

	["White Fur Silver Needle King Tea","/white/whitefurKing.jpg","good black tea", 12.00, 1, 1],
	["Peach Mo Mo White Tea","/white/peachWhite.jpg","good black tea", 12.00, 1, 1],
	["Tropical Passion White Tea","/white/tropicalPassionWhite.jpg","good black tea", 12.00, 1, 1],
	["White Fur Needle Cake Front Tea","/white/whitefurCake","good black tea", 12.00, 1, 1],

]


products_name.each do |name, photo_url, description, price, tea_id, type_id|
	Product.create(name: name, photo_url: photo_url, description: description, price: price, tea_id: tea_id, type_id: type_id)
			
	end



	