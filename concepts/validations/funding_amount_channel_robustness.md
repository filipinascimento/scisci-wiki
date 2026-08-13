# Funding amount channel robustness

## Summary

Funding amount channel robustness adds total award dollars or funding scale controls to test whether output differences attributed to review quality are instead explained by larger grants.

## Canonical Form

- Unit of analysis: grant, award amount, review score, publication output, citation output, patent output, or model coefficient.
- Typical representation: main score-outcome model with and without total award dollars.
- Validation target: distinguish proposal-quality signal from the resource-volume channel.
- Empirical signature: review-score coefficients remain similar after controlling for grant amount.

## Uses in Science of Science

- Strengthens [grant peer-review value-added](grant_peer_review_value_added.md) by checking whether reviewers predict better science rather than simply allocating more money.
- Complements [funded-only peer-review validation](funded_only_peer_review_validation.md), where all cases are funded but grant sizes can still vary.
- Connects funding evaluations to [creative output-productivity ambiguity](creative_output_productivity_ambiguity.md), because more dollars may increase output volume without improving idea quality.

## Operationalization

- Extract direct and total award amounts for each grant or project.
- Add funding amount controls to models predicting publications, citations, hit publications, patents, or novelty.
- Check whether the focal score, treatment, or funding-type coefficient attenuates materially.
- Where possible, model nonlinear amount effects and compare project types with different cost structures.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) adds total dollars awarded as a control in the NIH R01 review-score analysis.
- The robustness check addresses the possibility that better-scored grants generate more outputs because they receive more funding rather than because scores contain independent proposal-quality information.
- The paper reports that controlling for funding amount does not eliminate the score-outcome relationship.

## Caveats

- Award size can be endogenous to proposed scope, field, equipment needs, and institutional costs.
- Dollar controls may absorb part of the treatment pathway if reviewers intentionally allocate more resources to stronger proposals.
- Inflation, indirect costs, and multi-year award structures need harmonization before comparing amounts.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [creative output-productivity ambiguity](creative_output_productivity_ambiguity.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `funding_amount_channel_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: award-amount robustness; funding-scale channel check; grant-size control; resource-volume robustness
