# Within-paper reference-pair enumeration

## Summary

Within-paper reference-pair enumeration transforms each paper's bibliography into all pairwise combinations among cited entities before scoring recombination.

## Canonical Form

- Unit of analysis: paper bibliography, cited paper, cited journal, reference pair, or co-citation pair.
- Typical representation: all unordered cited-entity pairs within a focal paper, pair-frequency table, or paper-level pair multiset.
- Method target: convert a reference list into the pairwise input needed for conventionality and novelty measures.
- Empirical signature: each focal paper yields a distribution of cited-pair scores rather than a single cited-source count.

## Uses in Science of Science

- Provides the construction step for [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md).
- Connects recombination metrics to [co-citation](../representations/co_citation.md) by treating co-occurrence inside a bibliography as the raw pair event.
- Supplies the input for [journal-pair z-score](../measures/journal_pair_z_score.md), [median conventionality](../measures/median_conventionality.md), and [tail novelty](../measures/tail_novelty.md).
- Generalizes to cited papers, journals, topics, methods, patents, or concepts when recombination is measured at different entity levels.

## Operationalization

- Parse the bibliography or reference list of each focal paper.
- Resolve each reference to the chosen entity type, such as cited journal or cited paper.
- Enumerate all pairwise combinations among resolved cited entities.
- Count observed pair frequencies by publication year or field-year.
- Score the pairs against a randomized or expected-frequency baseline.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) states that the authors considered pairwise combinations of references in each paper's bibliography.
- The paper counts the frequency of each co-citation pair across all papers published in a year and compares observed frequencies with randomized citation-network expectations.
- Figure text in the same paper describes each focal paper as having a distribution of z-scores for its journal pairings.

## Caveats

- Pair enumeration grows quickly with reference-list length and can overweight long bibliographies.
- Entity resolution choices, such as journal versus paper, change the measured opportunity space.
- Pairwise enumeration ignores higher-order combinations unless extended explicitly.

## Links

- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [co-citation](../representations/co_citation.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [degree-preserving citation-network null](degree_preserving_citation_network_null.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; SciSciNet: W2066752129; WoS: unknown]

## Metadata

- Concept ID: `within_paper_reference_pair_enumeration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: bibliography pair enumeration; cited-pair enumeration; reference-pair construction; within-paper co-citation pair generation
