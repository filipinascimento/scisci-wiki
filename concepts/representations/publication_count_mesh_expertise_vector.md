# Publication-count MeSH expertise vector

## Summary

Publication-count MeSH expertise vector represents an evaluator's expertise as counts of prior publications associated with MeSH terms.

## Canonical Form

- Unit of analysis: evaluator, publication, MeSH term, expertise vector, or reviewer-proposal pair.
- Typical representation: weighted vector of MeSH terms where weights are publication counts.
- Representation target: locate evaluator expertise in the same controlled-vocabulary space as proposals.
- Empirical signature: reviewer-proposal distance can be computed between proposal MeSH vectors and evaluator publication-history vectors.

## Uses in Science of Science

- Extends [MeSH knowledge-frontier space](mesh_knowledge_frontier_space.md) from proposals to evaluators.
- Operationalizes [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md).
- Connects to [within-domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md), because reviewers inside a broad disease area can occupy different MeSH neighborhoods.

## Operationalization

- Link evaluator identities to prior PubMed publications.
- Extract MeSH terms from those publications before the review event.
- Count publications by MeSH term to build an expertise vector.
- Compare the evaluator vector with proposal vectors using cosine angle or related distance measures.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) represents proposals as MeSH vectors and reviewer expertise as analogous vectors from prior publications.
- Evaluator vectors use counts of publications associated with MeSH terms.
- The angular distance between proposal and evaluator vectors becomes the pair-level intellectual-distance measure.

## Caveats

- Publication counts are imperfect proxies for expertise depth, recency, or tacit knowledge.
- MeSH publication histories can miss cross-domain skills, clinical experience, and unpublished work.
- Common or broad MeSH terms can dominate vectors unless weighted or normalized.

## Links

- [MeSH knowledge-frontier space](mesh_knowledge_frontier_space.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [professional-librarian proposal MeSH coding](../methods/professional_librarian_proposal_mesh_coding.md)
- [within-domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `publication_count_mesh_expertise_vector`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: MeSH publication expertise vector; reviewer MeSH expertise vector; publication-weighted expertise vector; PubMed expertise vector
