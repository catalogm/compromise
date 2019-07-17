/** apply a tag, or tags to all terms */
const tagTerms = function(tag, doc, safe, reason) {
  let tagList = []
  if (typeof tag === 'string') {
    tagList = tag.split(' ')
  }
  //do indepenent tags for each term:
  doc.list.forEach(p => {
    let terms = p.terms()
    // tagSafe - apply only to fitting terms
    if (safe === true) {
      terms = terms.filter(t => t.canBe(tag))
    }
    terms.forEach((t, i) => {
      //fancy version:
      if (tagList.length > 1) {
        t.tag(tagList[i], reason)
      } else {
        //non-fancy version (same tag for all terms)
        t.tag(tag, reason)
      }
    })
  })
  return
}
module.exports = tagTerms
