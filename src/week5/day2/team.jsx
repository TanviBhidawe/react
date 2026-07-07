import TeamCard from "./teamCard"

function Team(){

return(

<div className="team">

<TeamCard
name="Yash"
role="Frontend"
skill="React"
img="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
/>

<TeamCard
name="Tanvi"
role="Backend"
skill="Node"
img="https://img.magnific.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740&q=80 "
/>

<TeamCard
name="Aditi"
role="Designer"
skill="Figma"
img="https://img.magnific.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?semt=ais_hybrid&w=740&q=80"
/>
<TeamCard
name="vaibhav"
role="Designer"
skill="ui/ux"
img="https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
/>

</div>

)

}

export default Team