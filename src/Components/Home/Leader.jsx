import { Typography } from "@mui/material"

const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Dries Vincent',
        role: 'Business Relations',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }

  ]
  
  export default function Leader() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <Typography color="primary" variant="h2" className="text-3xl font-bold tracking-tight  sm:text-4xl">Meet our leadership</Typography>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-6 gap-y-6 mt-3 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <Typography color="primary" className="text-base font-semibold leading-7 tracking-tight text-gray-200">{person.name}</Typography>
                    <p className="text-sm font-semibold leading-6 text-gray-200">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  