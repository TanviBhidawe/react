function TeamCard({ name, role, skill ,img}) {

return(

<div className="card">

<h2>{name}</h2>

<p>Role: {role}</p>

<p>Skill: {skill}</p>
<p><img src={img} alt={name} /></p>

</div>
)

}

export default TeamCard