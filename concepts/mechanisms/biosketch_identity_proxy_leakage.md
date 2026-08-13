# Biosketch identity-proxy leakage

## Summary

Biosketch identity-proxy leakage is the mechanism by which supposedly unreported demographic attributes can still be inferred from names, education histories, institutions, and career details in grant-review materials.

## Canonical Form

- Unit of analysis: grant application, biosketch, reviewer information set, identity cue, inferred demographic attribute, or review decision.
- Typical representation: proposal-review design caveat describing which applicant cues are visible to reviewers.
- Mechanism target: reviewer assessments may be affected by protected or socially salient identities even when the application does not explicitly ask reviewers to consider them.
- Empirical signature: application materials include names and biographical details that can proxy race, ethnicity, gender, nationality, class, or institutional status.

## Uses in Science of Science

- Provides one candidate mechanism behind [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Connects administrative funding audits to blinded-review interventions such as [triple-blind proposal review](../methods/triple_blind_proposal_review.md).
- Overlaps with [status-authority evaluation bias](status_authority_evaluation_bias.md) because institutional and educational cues can signal prestige.
- Links demographic linkage methods to reviewer information sets through [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md).

## Operationalization

- Inventory which applicant identifiers and career details are visible to reviewers at each review stage.
- Classify visible fields as direct identifiers, demographic proxies, institutional-status proxies, or topic/context cues.
- Compare review designs with more or less masking of names, institutions, and biosketch histories.
- Pair administrative disparity estimates with process evidence on what reviewers could observe.
- Treat proxy leakage as a mechanism hypothesis unless experimentally or quasi-experimentally tested.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) notes that reviewers do not observe applicant race or ethnicity directly, but they do observe names and educational information in the biosketch.
- The paper raises the possibility that reviewer-visible biographical cues could allow inference of applicant identity or background.
- This mechanism helps separate demographic record linkage for analysis from the information actually available during review.

## Caveats

- Proxy leakage does not prove that reviewers used the cues or that the cues caused observed disparities.
- Removing identity cues can also remove legitimate expertise, track-record, or feasibility information unless review criteria are redesigned.
- Names and institutions proxy multiple constructs, including prestige, nationality, field, cohort, and network position.
- Blinding interventions require evidence that masking is feasible for the review context.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [triple-blind proposal review](../methods/triple_blind_proposal_review.md)
- [status-authority evaluation bias](status_authority_evaluation_bias.md)
- [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `biosketch_identity_proxy_leakage`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: reviewer identity proxy leakage; biosketch demographic cues; grant-review identity cues; proposal-review proxy visibility
