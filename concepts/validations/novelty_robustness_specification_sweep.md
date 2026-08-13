# Novelty robustness specification sweep

## Summary

Novelty robustness specification sweep tests whether a novelty penalty or novelty effect survives alternative novelty definitions, history windows, control sets, and model specifications.

## Canonical Form

- Unit of analysis: proposal, paper, novelty score, model specification, or robustness table.
- Typical representation: grid of coefficients across novelty measures, controls, windows, and functional forms.
- Validation target: determine whether a novelty effect is an artifact of one operationalization.
- Empirical signature: coefficient sign and substantive magnitude remain stable across plausible definitions and controls.

## Uses in Science of Science

- Validates [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md), [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md), and [novelty penalty](../mechanisms/novelty_penalty.md).
- Complements [novelty-atypicality distinction](novelty_atypicality_distinction.md) by treating robustness as a design requirement, not only a post hoc table.
- Provides a reusable audit pattern for novelty studies based on MeSH terms, journal pairs, topics, embeddings, or text features.

## Operationalization

- Recompute novelty with alternative units such as terms, pairs, triplets, quadruplets, references, topics, or semantic entities.
- Vary whether novelty is measured as a share, count, percentile, tail indicator, or continuous score.
- Vary the historical baseline, such as last 10 years versus full observed history.
- Add and remove proposal, author, field, length, reference, and quality controls.
- Report whether adding controls attenuates or strengthens the novelty effect.
- When funding exposure is also constructed from grouped source categories, pair the novelty sweep with [funding definition sensitivity](funding_definition_sensitivity.md).
- When novelty is measured from reference combinations or journal combinations, test whether conclusions survive alternative tail, binary-new-combination, field, and budget specifications.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) states that novelty cannot be experimentally varied independently of other proposal characteristics, so robustness diagnostics are needed.
- The paper reports that the novelty result does not depend on whether novelty is measured as a share or count of new keyword pairs, triplets, or quadruplets.
- Boudreau et al. also report robustness to using the last 10 years versus the full PubMed history as the baseline and to controlling for the absolute number of keywords.
- Their omitted-variable checks find that progressively adding controls generally made the novelty estimate more negative rather than eliminating it.
- Verified full-text evidence from Wang, Lee, and Walsh (2018) adds a funding-status use case: their competitive-versus-block funding results survive replacing commonness-tail novelty with a binary new-journal-combination measure and additional field and budget checks.

## Caveats

- Robustness across specifications does not prove causal novelty effects when novelty itself is not randomized.
- Many similar specifications can become undisclosed researcher degrees of freedom if not documented.
- Controlled-vocabulary robustness may still miss conceptual novelty outside the vocabulary.

## Links

- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty-atypicality distinction](novelty_atypicality_distinction.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [analytic flexibility false positives](analytic_flexibility_false_positives.md)
- [citation window selection](../methods/citation_window_selection.md)
- [funding definition sensitivity](funding_definition_sensitivity.md)
- [commonness-based tail novelty](../measures/commonness_based_tail_novelty.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [funding status-interaction test](funding_status_interaction_test.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]
- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; SciSciNet: W2794465725; WoS: unknown]

## Metadata

- Concept ID: `novelty_robustness_specification_sweep`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: novelty robustness sweep; novelty specification grid; novelty omitted-variable audit; novelty measure sensitivity
