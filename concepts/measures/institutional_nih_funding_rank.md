# Institutional NIH funding rank

## Summary

Institutional NIH funding rank measures the resource position of an applicant's organization by ranking institutions according to the amount of NIH funding they receive.

## Canonical Form

- Unit of analysis: institution, applicant, grant application, employer stratum, or institution-year.
- Typical representation: top-ranked NIH-funded institution flag, rank bin, funding percentile, or continuous funding amount.
- Measurement target: biomedical research-resource environment and institutional access to NIH funding infrastructure.
- Empirical signature: applicants at more highly NIH-funded institutions have higher award probabilities after applicant-level controls.

## Uses in Science of Science

- Adds an institutional-resource covariate to [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Connects funding analysis to [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md), while focusing on NIH resource rank rather than general prestige.
- Helps distinguish applicant record effects from employer-resource effects in [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Complements [faculty hiring networks](../representations/faculty_hiring_networks.md) and other institutional-stratification representations.

## Operationalization

- Rank institutions by total NIH funding in a defined period before or during the application window.
- Attach each applicant's employing institution and code rank bins such as top 1 to 30, ranks 31 to 100, and lower-ranked or non-ranked institutions.
- Separate academic medical centers, universities, hospitals, and nonacademic research organizations where possible.
- Use period-specific ranks and document whether the rank is contemporaneous or lagged.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) includes employer characteristics and institutional NIH funding rank in the control set for R01 award probabilities.
- The paper reports that fewer applications from Black investigators are located at the institutions receiving the most NIH funding.
- In the verified text, working at a top 1 to 30 NIH-funded institution and at a rank 31 to 100 institution is associated with higher R01 award probability than the reference categories in the reported models.
- Ginther et al. use these institution controls while showing that Black applicants remain less likely than white applicants to receive R01 funding after observable applicant and employer characteristics are included.

## Caveats

- NIH funding rank is not the same as prestige, mentoring quality, administrative support, topic fit, or available research infrastructure.
- Institution rank can be endogenous to applicant composition and past funding success.
- Employer names and institutional reorganizations require careful normalization.
- Ranks are field- and agency-specific; NIH funding rank should not be generalized to non-biomedical settings without redefinition.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `institutional_nih_funding_rank`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: NIH-funded institution rank; institutional funding stratum; top NIH-funded institution flag; biomedical institutional resource rank
