# Degree-preserving citation-network null

## Summary

Degree-preserving citation-network nulls randomize citation edges while preserving citation-count constraints, producing baselines for expected co-citation, novelty, and network structure.

## Canonical Form

- Unit of analysis: citation edge, citing paper, cited paper, publication year, journal pair, or randomized network instance.
- Typical representation: Monte Carlo edge-switching ensemble with preserved in-degree, out-degree, and temporal citation constraints.
- Method target: estimate what citation-pair or network patterns would be expected by chance under fixed marginal citation behavior.
- Empirical signature: observed pair counts are compared with randomized-network means and variances.

## Uses in Science of Science

- Supplies the expected-frequency baseline for [journal-pair z-score](../measures/journal_pair_z_score.md).
- Converts [citation networks](../representations/citation_networks.md) and [co-citation](../representations/co_citation.md) into null-model-adjusted measures.
- Helps separate unusual recombination from high citation volume, journal size, and reference-list length.
- Can be reused for testing [growth-attachment null models](../validations/growth_attachment_null_models.md), [citation-network rewiring nulls](citation_network_rewiring_nulls.md), and other graph-randomization motifs.

## Operationalization

- Construct a paper-to-paper citation network for a defined publication window.
- Randomly switch citation links through a Monte Carlo algorithm while preserving the total citations to and from each paper.
- Preserve temporal structure so citations do not point into impossible publication times and papers or journals retain comparable age-conditioned citation opportunities.
- Aggregate randomized paper-pair citations to the target level, such as journal pairs.
- Compare observed counts with the randomized distribution to compute standardized scores or empirical p-values.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) uses randomized citation networks to compute expected yearly co-citation frequencies for journal pairs.
- The paper states that the switching algorithm preserves citation counts to and from each paper and the distribution of those counts forward and backward in time.
- Uzzi et al. aggregate both observed and randomized paper-to-paper citation networks into journal-pair counts before computing z-scores.
- The resulting null model supports their finding that high-impact papers often combine high conventionality with a small left tail of atypical pairings.

## Caveats

- Preserving degree and temporal marginals does not preserve field, topic, language, or journal editorial structure unless those constraints are added.
- Null-model choice can change which combinations appear atypical.
- Randomization can be expensive on very large citation graphs; implementation needs reproducible seeds, enough swaps, and convergence checks.

## Links

- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [citation networks](../representations/citation_networks.md)
- [co-citation](../representations/co_citation.md)
- [tail novelty](../measures/tail_novelty.md)
- [median conventionality](../measures/median_conventionality.md)
- [citation-network rewiring nulls](citation_network_rewiring_nulls.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `degree_preserving_citation_network_null`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: randomized citation-network baseline; citation edge-switching null; Monte Carlo citation null; degree-preserving citation randomization
