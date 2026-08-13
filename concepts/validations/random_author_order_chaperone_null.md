# Random author-order chaperone null

## Summary

Random author-order chaperone null tests whether apparent chaperoning exceeds what would be expected if author order within papers were randomly permuted.

## Canonical Form

- Unit of analysis: paper, author list, journal, field, or chaperone-effect ratio.
- Typical representation: randomized author-order baseline `crandom`, normalized magnitude `C = c / crandom`, confidence interval, or significance test.
- Validation target: rule out team size, productivity, and chance author-position transitions as explanations for a raw chaperone ratio.
- Empirical signature: observed chaperone ratios remain above the random-order baseline.

## Uses in Science of Science

- Validates [chaperone-effect ratio](../measures/chaperone_effect_ratio.md).
- Supports cross-field comparison in [venue chaperone effect](../mechanisms/venue_chaperone_effect.md).
- Uses [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md) while perturbing byline order.
- Complements [alphabetical author-order chaperone null](alphabetical_author_order_chaperone_null.md) for fields with alphabetical bylines.
- Provides a null-model pattern for other author-order motifs in [coauthorship networks](../representations/coauthorship_networks.md).

## Operationalization

- Preserve the observed set of papers, authors, team sizes, journals, and productivity histories.
- Randomly permute author order within each paper.
- Recompute new, chaperoned, and established PI categories and the raw chaperone ratio under the randomized ordering.
- Divide observed `c` by the randomized baseline `crandom` to obtain `C`.
- Treat `C > 1` as evidence that nonlast-to-last transitions are more common than expected by random author ordering.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) introduces `crandom` by randomly permuting author names in each paper.
- The paper defines `C = c / crandom` as the magnitude of the chaperone effect.
- Sekara et al. state that `C` is not affected by team size and individual publication volume because those features are preserved by the randomization.
- The normalized results show a field gradient, with weaker effects in mathematics and physics and stronger effects in biology and interdisciplinary journals.

## Caveats

- Random author order is not a realistic authorship mechanism in many fields; it is a baseline, not a behavioral model.
- The null does not address alphabetical-order conventions, submission selection, or author disambiguation errors.
- Preserving productivity and team size does not remove all topic, prestige, or institutional confounding.
- Multiple randomizations and uncertainty reporting are needed for stable estimates.

## Links

- [chaperone-effect ratio](../measures/chaperone_effect_ratio.md)
- [alphabetical author-order chaperone null](alphabetical_author_order_chaperone_null.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `random_author_order_chaperone_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: randomized byline chaperone null; crandom baseline; random author-order baseline; chaperone randomization null
