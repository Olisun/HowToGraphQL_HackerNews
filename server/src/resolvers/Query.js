async function feed(parent, args, context, info) {
  // Basically says if no filters are provided, the where object will just be an empty object and no filters will be applied to the query. 
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter }
    ]
  } : {};

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  const count = await context.prisma.linksConnection({
    where
  })
    .aggregate()
    .count()

  return {
    links,
    count
  }
}

module.exports = {
  feed
}