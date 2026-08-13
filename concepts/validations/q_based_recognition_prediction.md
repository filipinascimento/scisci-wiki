# Q-based recognition prediction

## Summary

Q-based recognition prediction tests whether ranking scientists by their inferred Q parameter better identifies externally recognized scientists than rankings by productivity or standard citation indicators.

## Canonical Form

- Unit of analysis: scientist, ranked career list, prize winner, medalist, or recognition set.
- Typical representation: ROC curve, area under the curve, precision-recall curve, or rank-threshold enrichment.
- Validation target: independent recognition validity of an author-level impact parameter.
- Empirical signature: Q-ranked lists recover recognized scientists more accurately than rankings by total citations, h-index, highest-paper impact, or productivity.

## Uses in Science of Science

- Provides an external-validation layer for the [individual Q parameter](../measures/individual_q_parameter.md) and [Q-model career impact prediction](../methods/q_model_career_prediction.md).
- Connects career-impact modeling to elite-recognition evidence without treating prizes as comprehensive ground truth.
- Complements [Nobel-prize credit validation](nobel_prize_credit_validation.md), which validates credit-allocation methods on prize-linked papers rather than career-level Q rankings.
- Supports [responsible metrics](../measures/responsible_metrics.md) by making recognition validation explicit and critiqueable.

## Operationalization

- Estimate Q, productivity N, total citations, h-index, and highest-paper impact for the same scientist set.
- Rank scientists separately by each indicator.
- Compare rankings against external recognition labels such as Nobel prizes or field medals using ROC and precision-recall curves.
- Repeat with early-career Q estimates when testing prospective prediction rather than retrospective ranking.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) ranks scientists by Q, productivity, total citations, h-index, and highest-paper impact.
- The paper validates these rankings with ROC curves for Nobel laureates and reports that Q has the highest ranking accuracy among the compared measures.
- Sinatra et al. report similar recognition-prediction results for Dirac and Boltzmann medalists.
- The full text also states that early-career Q is the most accurate tested predictor for Nobel laureates.

## Caveats

- Nobel and medal outcomes are elite, field-limited, capacity-constrained, and socially mediated recognition signals.
- Prize validation can miss invisible labor, interdisciplinary contributions, software, datasets, mentoring, and unrecognized discoveries.
- Retrospective recognition prediction should not be used as an unqualified hiring or funding rule without feedback, bias, and uncertainty audits.

## Links

- [individual Q parameter](../measures/individual_q_parameter.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Q parameter stability test](q_parameter_stability_test.md)
- [project-potential distribution](../measures/project_potential_distribution.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [Nobel-prize credit validation](nobel_prize_credit_validation.md)
- [recognition-visibility coupling](../mechanisms/recognition_visibility_coupling.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [prediction feedback loops](prediction_feedback_loops.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `q_based_recognition_prediction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q ROC prize validation; Nobel Q ranking; independent-recognition Q validation; medalist prediction by Q
