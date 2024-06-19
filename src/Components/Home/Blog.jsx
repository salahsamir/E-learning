import { Typography } from "@mui/material"

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Maria',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://t4.ftcdn.net/jpg/01/36/68/49/240_F_136684951_y3qIuZC8YTjUCPOPvR4jv7Z24p52dt6S.jpg',
      },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://t3.ftcdn.net/jpg/04/17/45/82/240_F_417458226_vV0392LwESBo3qTSj1mA5Wyd7TAj5w0q.jpg',
        },
      }
    // More posts...
  ]
  
  export default function Blog() {
    return (
      <div className="py-6 sm:py-6">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0">
            <Typography color={"primary"} variant={"h2"} className="text-3xl font-bold tracking-tight sm:text-4xl">From the blog</Typography>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-5 grid  grid-cols-1 gap-x-8 gap-y-16 border-t border-yellow-400 pt-10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-300">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <Typography color={"primary"} className="mt-2 text-lg font-semibold leading-6 group-hover:text-gray-600">
                 
                      {post.title}
                   
                  </Typography>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <Typography color={"primary"} variant={"p"} className="font-semibold">
                    
                        {post.author.name}
                     
                    </Typography>
                    <p className="text-gray-300">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  