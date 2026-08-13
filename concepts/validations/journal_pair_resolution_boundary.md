# Journal-Pair Resolution Boundary

## Summary

Journal-pair resolution boundary is the validation caveat that recombination measures based on cited-journal pairs capture domain-level combinations and may differ from paper-level, discipline-level, or topic-level novelty.

## Canonical Form

- Unit of analysis: cited-journal pair, paper, discipline, topic, or within-paper concept pair.
- Typical representation: granularity choice for recombination profiles.
- Validation target: whether a novelty result depends on journal-pair resolution.
- Empirical signature: a recombination measure is interpretable only after specifying the resolution at which prior work is combined.

## Uses in Science of Science

- Defines a boundary for [journal-pair z-score](../measures/journal_pair_z_score.md).
- Clarifies what [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md) can and cannot resolve.
- Connects journal-pair measures to [co-citation](../representations/co_citation.md), [topic models](../methods/topic_models.md), and [semantic embeddings](../representations/semantic_embeddings.md).
- Supports robustness checks for [tail novelty](../measures/tail_novelty.md).

## Operationalization

- State whether novelty is measured at journal, discipline, paper, reference, phrase, or topic level.
- Recompute recombination profiles at alternative resolutions where data allow.
- Compare whether impact patterns persist across resolution choices.
- Treat resolution mismatch as a source of measurement error in novelty and interdisciplinarity studies.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) aggregates paper-to-paper citation information into journal pairs to focus on domain-level combinations.
- The discussion states that the method can be applied at the level of disciplines, papers, or topics within papers.
- This makes the journal-pair level a deliberate resolution choice rather than a universal novelty unit.

## Caveats

- Journal categories can be too broad for methods and too narrow for emerging interdisciplinary fields.
- Lower-resolution measures often gain coverage and stability but lose conceptual specificity.
- Topic- or phrase-level alternatives require stronger text-processing validation.

## Links

- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [co-citation](../representations/co_citation.md)
- [topic models](../methods/topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [tail novelty](../measures/tail_novelty.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; SciSciNet: W2066752129; WoS: unknown]

## Metadata

- Concept ID: `journal_pair_resolution_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: recombination granularity boundary; journal-pair granularity caveat; novelty resolution choice; domain-level recombination boundary
