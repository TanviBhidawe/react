function PreviewCard({name,email,phone,role,experience,skills,about,
}) 
{
  return (
    <div className="preview">
      <h2>Live Preview</h2>

      <p><strong>Name:</strong> {name}</p>

      <p><strong>Email:</strong> {email || "-"}</p>
      <p> <strong>Phone:</strong> {phone || "-"}</p>
      <p> <strong>Role:</strong> {role || "-"}</p>
      <p> <strong>Experience:</strong> {experience || "-"}</p>
      <p><strong>Skills:</strong>{" "}
      {skills.length > 0 ? skills.join(", ") : "-"}
      </p>
       <p><strong>About:</strong> {about || "-"}</p>
       </div>
  );
}

export default PreviewCard;