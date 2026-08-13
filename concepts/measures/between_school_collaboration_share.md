# Between-school collaboration share

## Summary

Between-school collaboration share measures the fraction of papers whose authors are affiliated with more than one university, separating cross-institutional teamwork from solo authorship and same-university teams.

## Canonical Form

- Unit of analysis: paper, field, university set, authorship structure, or time period.
- Typical representation: solo share, within-school team share, between-school team share, field-year time series, or discipline-by-period table.
- Measurement target: how much collaboration crosses institutional boundaries rather than only adding more coauthors within one organization.
- Empirical signature: the between-school share grows faster than solo or same-school collaboration shares, especially in science and engineering and social science.

## Uses in Science of Science

- Splits [team authorship share](team_authorship_share.md) into institutional composition categories.
- Provides the prevalence side of [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md).
- Supplies a denominator for [between-school impact premium](../mechanisms/between_school_impact_premium.md) and [university tier mixing matrices](../representations/university_tier_mixing_matrix.md).
- Helps distinguish general team growth from the specific expansion of cross-university collaboration.

## Operationalization

- Parse author affiliations and map them to universities or equivalent institutional units.
- Classify papers as solo-authored, single-university collaborative, or between-school collaborative.
- Compute field-year shares for each authorship structure, optionally stratifying by discipline domain, team size, and university sample coverage.
- Treat multi-affiliation authors, nonuniversity partners, consortium names, and missing addresses as explicit data-quality cases.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) analyzes 4.2 million Web of Science papers from 662 major U.S. universities between 1975 and 2005.
- The paper classifies papers into solo, within-school collaboration, and between-school collaboration and reports that between-school collaboration is the fastest-growing authorship structure in science and engineering.
- In science and engineering, between-school collaboration rose to 32.8% by 2005; in social sciences, it rose to 34.4%.
- The paper reports that 168 of 172 science and engineering subfields and all 54 social-science subfields increased their between-school collaboration share between early and late periods.
- This evidence is split out into the [authorship structure taxonomy](authorship_structure_taxonomy.md), [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md), [between-school collaboration field-universality check](../validations/between_school_collaboration_field_universality.md), and [communication-technology jump test](../validations/communication_technology_jump_test.md).

## Caveats

- The measure depends on address disambiguation and the university sample frame.
- Institutional boundary crossing is not the same as intellectual distance, disciplinary distance, or equal contribution.
- Large consortia, multicampus systems, hospitals, and research institutes can blur university boundaries.
- Growth in the share can reflect more complete address indexing as well as real collaboration change.

## Links

- [team authorship share](team_authorship_share.md)
- [authorship structure taxonomy](authorship_structure_taxonomy.md)
- [mean team-size growth](mean_team_size_growth.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [between-school impact premium](../mechanisms/between_school_impact_premium.md)
- [geographic reach-frequency decoupling](../mechanisms/geographic_reach_frequency_decoupling.md)
- [between-school collaboration field-universality check](../validations/between_school_collaboration_field_universality.md)
- [communication-technology jump test](../validations/communication_technology_jump_test.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `between_school_collaboration_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Aliases: between-school authorship share; cross-university collaboration share; multi-university paper share; institutional boundary-crossing share
