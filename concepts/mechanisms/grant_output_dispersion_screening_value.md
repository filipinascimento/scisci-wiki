# Grant-output dispersion screening value

## Summary

Grant-output dispersion screening value is the mechanism that expert review becomes more valuable when funded proposals have highly dispersed future outcomes, because separating exceptional projects from ordinary ones has large expected payoffs.

## Canonical Form

- Unit of analysis: grant, proposal, review score, future output, citation tail, patent outcome, or funded-project portfolio.
- Typical representation: output-dispersion table, high-impact tail model, review-score gradient, or proposal-screening payoff argument.
- Mechanism: when grant outcomes are skewed, a screening process that better identifies high-upside proposals can matter more than one that only shifts average output.
- Empirical signature: review scores predict right-tail outcomes more strongly than average outcomes.

## Uses in Science of Science

- Mechanism layer for [grant peer-review value-added](../validations/grant_peer_review_value_added.md).
- Explains why [grant hit-publication tail](../measures/grant_hit_publication_tail.md) and [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md) are central outcomes, not only supplemental metrics.
- Connects [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md) to the welfare value of screening.
- Helps compare deterministic scoring, lotteries, portfolio funding, and high-risk/high-reward programs.

## Operationalization

- Estimate the distribution of outputs among funded grants, including publication counts, citations, hit papers, and patents.
- Compare review-score gradients for mean outcomes and tail outcomes.
- Report whether predictive value is concentrated in the upper tail.
- Separate dispersion in project outcomes from dispersion in applicant prestige or funding amounts.
- Use lag-aware outcomes so late patenting or citation tails are not prematurely censored.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) reports large dispersion in outputs among NIH-funded R01 grants.
- The same paper finds that better percentile scores are especially predictive of high-impact publications and patent-linked outputs.
- This supports a screening-value interpretation: the panel's value lies partly in identifying projects with unusually high future payoff.
- The motif is distinct from funding amount robustness because it concerns outcome heterogeneity, not the treatment intensity of grant dollars.

## Caveats

- Output dispersion may reflect field, institute, team size, or publication norms unless those strata are modeled.
- Tail predictiveness does not prove rejected high-upside proposals were correctly handled.
- Screening value depends on the evaluator's policy objective; societal impact, novelty, equity, and portfolio diversity may imply different tails.

## Links

- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md)
- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [grant-patent lag truncation bias](../validations/grant_patent_lag_truncation_bias.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `grant_output_dispersion_screening_value`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: grant outcome dispersion screening value; proposal screening payoff from dispersion; funded-grant outcome spread; peer-review screening value mechanism
