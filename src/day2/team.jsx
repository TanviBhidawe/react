import TeamCard from "./teamCard"

function Team(){

return(

<div className="team">

<TeamCard
name="Tanvi"
role="Frontend"
skill="React"
/>

<TeamCard
name="Yash"
role="Backend"
skill="Node"
/>

<TeamCard
name="Aditi"
role="Designer"
skill="Figma"
/>
<TeamCard
name="vaibhav"
role="Designer"
skill="ui/ux"
/>

</div>

)

}

export default Team