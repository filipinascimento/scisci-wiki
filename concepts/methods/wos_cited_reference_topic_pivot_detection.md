# WoS cited-reference topic-pivot detection

## Summary

Focal-paper text and cited-reference topics can be compared to detect publications that pivot away from their predecessor literature.

## Canonical Form

- Unit of analysis: focal paper, cited reference set, topic vector, embedding, or transformative-paper candidate.
- Typical representation: reference-to-focal topic divergence score.
- Mechanism, measurement, or validation target: semantic pivot from predecessor literature toward new topical directions.
- Empirical signature: high-pivot papers have focal content far from the topic profile of their cited predecessors..

## Uses in Science of Science

- Uses [full cited-reference indexing](../datasets/full_cited_reference_indexing.md) as a semantic baseline.
- Connects [cited predecessor semantic diversity](../measures/cited_predecessor_semantic_diversity.md) to transformation detection.
- Complements novelty measures based on journal pairs or tail atypicality.

## Operationalization

- Represent focal papers and cited references in a shared topic or embedding space.
- Measure divergence between focal-paper content and cited-predecessor topic profiles.
- Validate high-pivot papers as potential transformative discourse shifts.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes a WoS-and-patent-data proposal using NLP to measure where papers pivot away from cited-reference topics to identify transformative publications.

## Caveats

- Topic pivot is an analytic method, not a basic cited-reference coverage fact.
- High divergence can reflect noisy metadata or interdisciplinary bridging rather than transformation.

## Links

- [Full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [Cited predecessor semantic diversity](../measures/cited_predecessor_semantic_diversity.md)
- [New journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [Tail novelty](../measures/tail_novelty.md)
- [Knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [Topic models](topic_models.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_cited_reference_topic_pivot_detection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: cited-reference topic pivot; reference-to-focal topic divergence; transformative-paper pivot detection; cited-predecessor topic shift
