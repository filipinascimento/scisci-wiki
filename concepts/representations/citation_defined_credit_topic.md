# Citation-defined credit topic

## Summary

Citation-defined credit topic represents the relevant topic of a focal contribution through the papers that cite and co-cite it, rather than through a fixed field label.

## Canonical Form

- Unit of analysis: focal paper, citing paper, co-cited paper, topic neighborhood, author-credit comparison, or citation context.
- Typical representation: citation-defined local topic around a target paper.
- Representation target: use community citation behavior to identify the topical body of work relevant for credit attribution.
- Empirical signature: co-cited papers around the focal paper define the comparison set used to assign perceived contribution.

## Uses in Science of Science

- Supports [co-citation credit attribution](../methods/co_citation_credit_attribution.md) and [focal-paper co-citation network](focal_paper_co_citation_network.md).
- Provides the topic frame for [independent-author credit comparison](../methods/independent_author_credit_comparison.md).
- Connects citation-based topic construction to [co-citation](co_citation.md), research-front detection, and community-perceived credit.

## Operationalization

- Start with a focal paper and collect papers that cite it.
- Identify papers co-cited with the focal paper by those citing papers.
- Treat the resulting co-citation neighborhood as the relevant topic for comparing focal coauthors' related work.
- Update the topic as new citations accumulate.
- Avoid imposing a journal, department, or broad subject category when the citation-defined neighborhood is more precise.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) defines credit attribution through citing papers and the co-cited papers they place near the focal paper.
- The paper argues that this process captures the community's perception of the research topic and each coauthor's related body of work.
- Shen and Barabasi use this citation-defined topic to compare independent contributions by coauthors and to infer perceived credit shares.

## Caveats

- Citation-defined topics mature over time and can be unstable for recent papers.
- Review articles, canonical references, and strategic citations can distort the local topic.
- The topic reflects community perception, not necessarily actual intellectual labor.

## Links

- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [focal-paper co-citation network](focal_paper_co_citation_network.md)
- [independent-author credit comparison](../methods/independent_author_credit_comparison.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [co-citation](co_citation.md)
- [credit-share evolution](../measures/credit_share_evolution.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `citation_defined_credit_topic`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: citation-defined topic; co-citation topic neighborhood; credit-topic representation; community-defined credit topic
