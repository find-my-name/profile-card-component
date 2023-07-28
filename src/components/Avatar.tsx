interface Props {
  avatarUrl: string;
  name: string;
  age: number;
  city: string;
}

const Avatar = ({ avatarUrl, name, age, city }: Props) => {
  return (
    <>
      <img src={avatarUrl} alt="" />
      <h2 className="name">
        {name} <span>{age}</span>
      </h2>
      <p>{city}</p>
    </>
  );
};

export default Avatar;
