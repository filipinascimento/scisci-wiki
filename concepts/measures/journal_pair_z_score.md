# Journal-pair z-score

## Summary

Journal-pair z-score measures whether two journals are cited together more or less often than expected under a randomized citation-network baseline.

## Canonical Form

- Unit of analysis: cited-journal pair, publication year, focal paper reference list, or journal-pair distribution.
- Typical representation: standardized observed-minus-expected co-citation frequency for a journal pair.
- Measurement target: conventionality or atypicality of a domain-level knowledge combination.
- Empirical signature: positive scores indicate pairings that appear more often than expected; negative scores indicate rare or atypical pairings.

## Uses in Science of Science

- Provides the pair-level input for [median conventionality](median_conventionality.md) and [tail novelty](tail_novelty.md).
- Turns [co-citation](../representations/co_citation.md) into a standardized recombination measure rather than only a raw edge weight.
- Can be aggregated into a [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md) for paper-level novelty and conventionality.
- Uses the [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md) as a large-scale source-data pattern.
- Supports [novelty and conventionality](../mechanisms/novelty_conventionality.md), [interdisciplinarity](../mechanisms/interdisciplinarity.md), and [responsible metrics](responsible_metrics.md) analyses.

## Operationalization

- Form all pairwise combinations among cited journals in each paper's bibliography.
- Count each cited-journal pair across papers in the focal year.
- Generate expected pair counts using a [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md) or another documented baseline.
- Convert observed versus expected frequencies into a z-score for each journal pair.
- Interpret scores jointly with field/year coverage and journal granularity.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) compares observed yearly cited-journal-pair frequencies in Web of Science with randomized citation-network frequencies.
- The paper states that z-scores above zero indicate conventional pairings, while z-scores below zero indicate atypical or novel pairings.
- Uzzi et al. validate the score by showing that same-Web-of-Science-discipline journal pairs have higher z-scores than interdisciplinary pairs, while also noting that many interdisciplinary pairs are still not novel.
- The full text reports illustrative 1980 examples: Tetrahedron paired with Experientia has a high positive score, while Tetrahedron paired with Life Sciences has a negative score.

## Caveats

- Journal pairs are coarse domain proxies and can miss conceptual, methodological, or data-level novelty.
- Scores depend on database coverage, journal title normalization, publication year, and null-model assumptions.
- Negative z-scores can reflect indexing artifacts or low-volume journals rather than meaningful novelty.

## Links

- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md)
- [interdisciplinary pair novelty validation](../validations/interdisciplinary_pair_novelty_validation.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [median conventionality](median_conventionality.md)
- [tail novelty](tail_novelty.md)
- [novelty-conventionality quadrant typology](novelty_conventionality_quadrant_typology.md)
- [co-citation](../representations/co_citation.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [responsible metrics](responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `journal_pair_z_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: cited-journal pair z-score; journal-pair atypicality score; conventionality z-score; co-citation z-score
