'use client'
import { useState } from 'react' 
import { motion, AnimatePresence } from 'framer-motion' 

const App = () => {
  
    const items1 = [
        {
        id: '1',
        title: 'Chinese New York',
        pic: 'https://img.freepik.com/free-photo/japan-street-daytime_23-2148942935.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
        description: `The New York metropolitan area is home to the largest and most prominent ethnic Chinese population outside of Asia, hosting Chinese populations representing all 34 provincial-level administrative units of China.[1][2] The Chinese American population of the New York City metropolitan area was an estimated 893,697 as of 2017, constituting the largest and most prominent metropolitan Asian national diaspora outside Asia.[3] New York City itself contains by far the highest ethnic Chinese population of any individual city outside Asia, estimated at 628,763 as of 2017.[4]

        New York City and its surrounding metropolitan area, including Long Island and parts of New Jersey, is home to 12 Chinatowns, early U.S. racial ghettos where Chinese immigrants were made to live for economic survival and physical safety[5] that are now known as important sites of tourism and urban economic activity. Six Chinatowns[6] (or nine,[7] New York including the emerging Chinatowns in Elmhurst and Whitestone, Queens,[8] and East Harlem, Manhattan) are located in New York City proper, and one each is located in Nassau County, Long Island  Edison, New Jersey [8] West Windsor, New Jersey  and Parsippany-Troy Hills, New Jersey. This excludes fledgling ethnic Chinese enclaves emerging throughout the New York metropolitan area, such as Jersey City, New Jersey  China City of America in Sullivan County, New York  and Dragon Springs (in Deerpark, Orange County, New York), which serves as the de facto headquarters for both the global Falun Gong New religious movement as well as its Shen Yun performance arts troupe.`,
        },
        {
        id: '2',
        title: 'Melbourne lost again?',
        pic: 'https://img.freepik.com/free-photo/beautiful-architecture-building_74190-6332.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
        description: `Ranked: The 20 Best Cities to Live in the World:
        Vienna, Austria
        Copenhagen, Denmark
        Melbourne, Australia
        Sydney, Australia
        Vancouver, Canada
        Zurich, Switzerland
        Calgary, Canada
        Geneva, Switzerland
        Toronto, Canada
        Osaka, Japan
        Auckland, New Zealand
        Adelaide, Australia
        Perth, Australia
        Helsinki, Finland
        Tokyo, Japan
        Brisbane, Australia
        Frankfurt, Germany
        Berlin, Germany
        Luxembourg
        Amsterdam, Netherlands`,
        },
        {
        id: '3',
        title: 'Card 3',
        pic: 'https://img.freepik.com/free-photo/big-city_1127-3102.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
        description: `It was a great experiment with such cards but actually its a little boring. Here is my personal opinion about that project, perfect! I really like that project, especially for this design and animations. Its so smooth and beautiful and I would do my vlog like that. Well, I hope you like it too, Good Luck!`,
        },
        {
        id: '4',
        title: 'Great future for people in US',
        pic: 'https://img.freepik.com/premium-photo/modern-architecture-office-building-in-jinan-financial-district_1417-7108.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
        description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: '5',
            title: 'Ideas for summer',
            pic: 'https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/e4be365c-490e-4373-858b-605260490a5f/Summer+bucket+list+ideas.jpg?format=1500w',
            description: `Food and Drink
            Make your own ice cream.
            Have a barbecue.
            Make massive ice cream sundaes.
            Bake a fresh blueberry or cherry pie.
            Make s'mores.
            Eat popsicles and ice cream cones.
            Picnic in your backyard—or your living room.
            Visit an outdoor farmer's market.
            Make homemade lemonade.
            Make your own pesto.
            Drink a fruity cocktail with an umbrella in it.
            Eat vegetables and fruit right out of the garden.
            Sip a rosé (or frosé).
            Fun and Games
            Run through a sprinkler.
            Have a watermelon seed-spitting contest.
            Camp out in the backyard.
            Try your hand at face painting.
            Have a backyard scavenger hunt.
            Create a sidewalk chalk art gallery.
            Have fun at a virtual summer camp.
            Do fun science experiments (the baking soda and vinegar volcano is a classic).
            Make a pillow fort.
            Have a campfire in your backyard.
            Splash in rain puddles.
            Have a water balloon fight.
            Pure Relaxation
            Go stargazing.
            Nap in a hammock.
            Seek out a drive-in movie (or screen a movie in your backyard)
            Look for fireflies.
            Finish the perfect summer read.
            Start a book club.
            Watch the sunset.
            Go for a scenic drive.
            Look for a rainbow during a downpour.
            Give yourself a fun pedicure (rainbow toes, anyone?).
            Movement and Exercise
            Grow a little garden.
            Go for a scenic hike.
            Try something new—a new dance step, a new hobby, or a new cooking technique.
            Kayak, canoe, or paddleboard.
            Go to the beach.
            Go fishing.
            Run and train for a 5K.
            Climb a tree.`,
        },
        {
            id: '6',
            title: 'Is cats psychopaths?',
            pic: 'https://img.freepik.com/free-photo/owner-petting-adorable-cat_23-2148740477.jpg?size=626&ext=jpg&ga=GA1.2.1225704836.1691402271&semt=sph',
            description: `Some say “cats are people, too” — but if that’s the case, you’d better watch your back.

            A study has found that the average cantankerous kitty could be harboring actual psychopathic tendencies.
            
            Researchers at the UK’s University of Liverpool and Liverpool John Moores University surveyed pet owners to rate their cats’ level of psychopathy — as defined by human psychological standards.
            
            Their findings, published in the December issue of the Journal of Research in Personality, revealed that most cats fall somewhere on the spectrum of psychopathy — that is, on the “triarchic” concept of psychopathy, which uses levels of boldness, meanness and disinhibition to measure the psychiatric disorder in people.
            
            The 46-question survey, which currently includes 549 participants, asked cat owners to rate whether their cat “torments their prey rather than killing it straight away,” “cat dominates neighborhood cat(s) (e.g. chases them, picks fights with them),” “is undeterred by punishment i.e. will repeat behaviors he/she is scolded for” and “vocalizes loudly (e.g. meows, yowls) for no apparent reason.” Responses were documented on a five-factor scale, from “Does not describe my cat” to “Describes my cat extremely well.”
            
            In addition, researchers added human-unfriendliness and pet-unfriendliness to their scale to create the Cat Triarchic Plus, a tool to measure feline psychopathy.
            
            It turns out that the survey actually emerged from an organic source: cats owned by the researchers themselves.
            
            “Our cats and the differences in their personalities inspired us to start this research,” researcher Rebecca Evans told Vice’s Motherboard.`,
        },
        {
            id: '7',
            title: 'Melbourne lost again?',
            pic: 'https://img.freepik.com/free-photo/beautiful-architecture-building_74190-6332.jpg?size=626&ext=jpg&ga=GA1.1.1225704836.1691402271&semt=sph',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            id: '8',
            title: 'Smartest person in the world',
            pic: 'https://qph.cf2.quoracdn.net/main-qimg-907c1d816364be2d02b66a02680664ee-lq',
            description: `In 1898, the smartest man who ever lived was born in America. His name was William James Sidis and his IQ was eventually estimated to be between 250 and 300 (with 100 being the norm). His parents, Boris and Sarah, were pretty intelligent themselves. Boris was a famed psychologist while Sarah was a doctor.`,
        },
    ] 

    const [selectedId, setSelectedId] = useState('') 
    const [addItemMode, setAddItemMode] = useState(false) 
    const [nameInput, setNameInput] = useState('') 
    const [picInput, setpicInput] = useState('') 
    const [descriptionInput, setDescriptionInput] = useState('') 
    const [filteredItems, setFilteredItems] = useState(items1) 
    const [items, setItems] = useState(items1) 
    
    const handleAddItemClick = () => {
        console.log("Add button clicked") 
        setAddItemMode(true) 
        setNameInput('') 
        setpicInput('') 
        setDescriptionInput('') 
    } 

    const handleAddItem = () => {
        console.log("Add item button clicked") 
        if (nameInput && picInput && descriptionInput) {
            const newItem = {
              id: String(items.length + 1),
              title: nameInput,
              pic: picInput,
              description: descriptionInput,
            } 
            setItems([...items, newItem]) 
            setFilteredItems([...items, newItem])  // Update filtered items as well
        }
        setAddItemMode(false) 
    } 

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase() 
        if (searchTerm === '') {
          setFilteredItems(items)  // Reset filtered items when the search term is empty
        } else {
          const filtered = items.filter((item) =>
            item.title.toLowerCase().includes(searchTerm)
          ) 
          setFilteredItems(filtered) 
        }
    } 

      

    return (
        <motion.div className="bg-blue-600 flex flex-col items-center justify-center w-full h-full">

        <div>
                <input
                placeholder="Search"
                type="text"
                className="outline-none rounded-3xl p-5 mt-5"
                onChange={handleSearchChange}
                />
                <button
                className="p-5 bg-blue-900 m-1 rounded-3xl text-white"
                onClick={handleAddItemClick}
                >
                Add
                </button>
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap">
        
            {filteredItems.map((item) => (
            <motion.div
                className={`card overflow-hidden  m-5 w-1/4 bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                selectedId === item.id ? 'card-selected' : ''
                }`}
                layoutId={`card-container-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                key={item.id}
                initial={{ scale: 1 }}
                animate={{ scale: selectedId === item.id ? 1 : 1 }} // Increase scale on selected card
                transition={{ duration: 0.1 }}
            >

                <div className="card-content">
                    <motion.img  src={item.pic} className=" mb-1  w-full h-60 object-cover " />
                    <motion.h2 className="text-xl font-bold mb-2 text-blue-600 p-3">{item.title}</motion.h2>
                
                </div>

            </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selectedId && (
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                {filteredItems.map((item) => (
                item.id === selectedId && (
                    <motion.div
                    className="bg-white rounded-lg p-4 shadow-md w-6/12 h-auto mx-auto "
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    >
                        <div className='max-h-[600px] overflow-y-auto '>
                            <motion.div className="relative">
                                <motion.button
                                className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                onClick={() => setSelectedId(null)}
                                >
                                Close
                            </motion.button>

                            <motion.img  src={item.pic} className=" mb-1 object-cover w-full  " height={100} />
                            <motion.h2 className="text-xl font-bold mb-2 text-blue-600 ">{item.title}</motion.h2>
                            
                            
                            <motion.p
                            className="text-md text-gray-700 w-[100%] w-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            >
                                {item.description}
                            </motion.p>
                        
                        </motion.div>
                        </div>
                    </motion.div>

                )
                ))}

            </motion.div>
            )}
            
        </AnimatePresence>


        {addItemMode && (
            <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white rounded-lg p-4 shadow-md w-4/12 h-auto flex items-center justify-center flex-col"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                >
                    <button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setAddItemMode(false)}>
                        Close
                    </button>
                    <input
                    className='p-3 w-10/12 outline-none border-b-2 border-blue-400 text-blue-600'
                        type="text"
                        placeholder="Name"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <input
                        className='p-3 w-10/12 outline-none border-b-2 border-blue-400 text-blue-600'
                        type="text"
                        placeholder="Image IRL"
                        value={picInput}
                        onChange={(e) => setpicInput(e.target.value)}
                    />
                    <textarea
                        className='p-3 w-10/12 outline-none border-b-2 border-blue-400 text-blue-600'
                        placeholder="Description"
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />
                    <button onClick={handleAddItem} className='p-3 m-3 border-blue-600 rounded-full border-2'>Add Item</button>
                </motion.div>
            </motion.div>
            )}
        </motion.div>
    ) 
} 

export default App 
