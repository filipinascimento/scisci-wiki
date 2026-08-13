# NIH IMPAC R01 grant panel

## Summary

NIH IMPAC R01 grant panel is an administrative grant-level dataset linking NIH R01 applications, review scores, applicant characteristics, resubmission histories, funding status, publications, citations, and downstream outcomes.

## Canonical Form

- Unit of analysis: R01 application, funded grant, PI, NIH institute, study section, publication, citation, or patent.
- Typical representation: longitudinal grant panel with review scores, applicant covariates, output links, and outcome windows.
- Mechanism or measurement target: proposal selection, funded research output, grant-review validity, and science-to-technology spillovers.
- Empirical signature: administrative grant records are joined to PubMed, Web of Science, and USPTO-derived output traces.

## Uses in Science of Science

- Supplies the data layer for [grant peer-review value-added](../validations/grant_peer_review_value_added.md).
- Supplies the application-level administrative base for [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Links [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md) to later scholarly and technological outputs.
- Extends [grant-publication linkage tables](grant_publication_linkage_tables.md) by adding review scores and applicant-history controls.
- Has a near-threshold junior-PI specialization in [junior NIH R01 near-threshold panel](junior_nih_r01_near_threshold_panel.md).
- Complements broader [funding acknowledgments and grant links](funding_acknowledgments.md), fresh [Dimensions](dimensions.md) grant metadata, and stale-but-useful [SciSciNet-v2](sciscinet_v2.md) NIH link tables.

## Operationalization

- Extract R01 application records, fiscal year, institute, study section, application type, [priority score receipt](../measures/priority_score_receipt.md), percentile score, and award amount from NIH administrative data.
- Attach applicant history: previous publications, citations, hit papers, [prior NIH grants or review experience](../measures/prior_nih_experience_indicators.md), degree type, career age, [NIH training support](../measures/nih_training_support_indicators.md), [institution rank](../measures/institutional_nih_funding_rank.md), and inferred demographic fields where ethically justified.
- Document the [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md) workflow and the visibility of sensitive fields to reviewers versus analysts.
- Reconstruct [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md) when application-family behavior is part of the design.
- Link funded grants to publications through PubMed grant acknowledgments and to citation outcomes through Web of Science.
- Link grants to patents directly through NIH support acknowledgments and indirectly through patents citing grant-supported publications.
- Preserve the applicant-history controls, residual score diagnostics, hit-publication outcomes, and out-of-order funding flags needed for peer-review validation.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) uses NIH IMPAC II records for 83,188 Type 1 R01 applications from fiscal years 2000 through 2006 and links them to Web of Science, NIH Doctoral Record File, IPEDS, and AAMC Faculty Roster data.
- Ginther et al. use the panel to study application-level award probabilities, applicant race and ethnicity, training support, employer characteristics, publication records, prior NIH experience, and resubmission behavior.
- Verified full-text evidence from Li and Agha (2015) uses 137,215 funded NIH R01 grants from fiscal years 1980 through 2008.
- The paper links IMPAC grant records to PubMed, Web of Science, and USPTO data to measure publications within 5 years, citations through 2013, high-impact publications, and direct or indirect patents.
- The supplementary text reports 21 NIH institutes and 617 study sections in the analysis sample.
- Li and Agha also construct applicant-level controls from publication history, grant history, degrees, career age, institutional affiliation, gender, and ethnicity proxies.
- The same full text supports [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md), [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md), and [grant-patent lag truncation bias](../validations/grant_patent_lag_truncation_bias.md) as lower-level motifs within the funded-R01 review-score panel.
- Verified full-text evidence from Wang, Jones, and Wang (2019) uses NIH R01 application records for junior PIs from 1990 to 2005, focusing on applicants near the funding threshold and linking them to Web of Science, PubMed, Dimensions, NSF funding histories, and active-status outcomes.

## Caveats

- Some IMPAC-derived analyses use all Type 1 applications, while others use funded grants only; the sampling frame determines whether rejected proposals and resubmission behavior are observable.
- The Li and Agha analysis sample is funded grants, so it does not include the full rejected-application pool.
- Publication acknowledgments are incomplete and can misattribute or miss outputs.
- Name-based applicant matching, inferred demographics, and institution ranks require validation and careful ethical framing.
- Modern replications should prefer current Dimensions/OpenAlex/funder metadata where available, while treating SciSciNet-v2 as stale for recent coverage.

## Links

- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [priority score receipt](../measures/priority_score_receipt.md)
- [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md)
- [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md)
- [NIH training support indicators](../measures/nih_training_support_indicators.md)
- [institutional NIH funding rank](../measures/institutional_nih_funding_rank.md)
- [prior NIH experience indicators](../measures/prior_nih_experience_indicators.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md)
- [applicant prestige-residualization stack](../validations/applicant_prestige_residualization_stack.md)
- [residual review-score response curve](../validations/residual_review_score_response_curve.md)
- [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [junior NIH R01 near-threshold panel](junior_nih_r01_near_threshold_panel.md)
- [funding acknowledgments and grant links](funding_acknowledgments.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [peer-review hit-miss asymmetry](../validations/peer_review_hit_miss_asymmetry.md)
- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [grant-patent lag truncation bias](../validations/grant_patent_lag_truncation_bias.md)
- [patent paper links](patent_paper_links.md)
- [Dimensions](dimensions.md)
- [SciSciNet-v2](sciscinet_v2.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `nih_impac_r01_grant_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: IMPAC R01 panel; NIH R01 administrative data; NIH grant outcome panel; R01 review score panel; IMPAC II application panel
