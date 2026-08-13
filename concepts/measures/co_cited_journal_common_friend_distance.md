# Co-cited-journal common-friend distance

## Summary

Cognitive distance between newly paired journals can be estimated from the overlap of their recent co-citation neighborhoods.

## Canonical Form

- Unit of analysis: journal pair, prior co-citation vector, and novelty score.
- Typical representation: cosine similarity of prior cited-journal co-citation profiles, often transformed to distance.
- Mechanism, measurement, or validation target: ease or cognitive distance of a newly paired journal combination.
- Empirical signature: new journal pairs with few common co-citation neighbors are treated as more distant or difficult combinations..

## Uses in Science of Science

- Adds a lower-level measure to [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md).
- Connects [co-citation](../representations/co_citation.md) to novelty measurement.
- Useful for reproducing Wang-style novelty weights.

## Operationalization

- Build cited-journal co-citation vectors from the prior three years.
- Compute cosine similarity for each candidate pair and use `1 - cosine` as a distance weight.
- Handle sparse, young, multidisciplinary, and star journals explicitly.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) defines journal-pair ease through cosine similarity of prior co-citation profiles, described as common friends.
- This supports a co-cited-journal common-friend distance measure.

## Caveats

- Sparse, young, star, or multidisciplinary journals can distort the common-friend signal.
- Journal-level distance is a proxy for cognitive distance, not a direct measure.

## Links

- [Distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md)
- [Co-citation](../representations/co_citation.md)
- [Journal similarity mapping](../methods/journal_similarity_mapping.md)
- [New journal-pair novelty](new_journal_pair_novelty.md)
- [Journal-pair entity proxy boundary](../validations/journal_pair_entity_proxy_boundary.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `co_cited_journal_common_friend_distance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: journal common-friend distance; co-citation common-friend novelty distance; cited-journal co-citation distance
