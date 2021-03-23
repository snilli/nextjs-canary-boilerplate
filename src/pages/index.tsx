const Example: {name: string} = {
  name: 'next',
}

export default function Home() {
  return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>
          <p>{Example.name}</p>
        </h1>
      </div>
  )
}
