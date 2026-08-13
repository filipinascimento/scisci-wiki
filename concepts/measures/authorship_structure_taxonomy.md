# Authorship structure taxonomy

## Summary

Authorship structure taxonomy classifies papers by whether authorship is solo, collaborative within one institution, or collaborative across institutions.

## Canonical Form

- Unit of analysis: paper, author, affiliation, university, field-year cell, or institution set.
- Typical representation: mutually exclusive authorship classes, time series of class shares, or field-by-period decomposition.
- Measurement target: whether collaboration growth comes from adding coauthors inside one organization or from crossing institutional boundaries.
- Empirical signature: paper counts or shares assigned to solo, within-school collaborative, and between-school collaborative categories.

## Uses in Science of Science

- Splits [team-authorship share](team_authorship_share.md) into institution-aware components.
- Supplies the paper classification needed for [between-school collaboration share](between_school_collaboration_share.md).
- Converts [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) into an interpretable collaboration measure.
- Provides a bridge between individual-level [coauthorship networks](../representations/coauthorship_networks.md) and institution-level [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md).

## Operationalization

- Parse authors and affiliations for each paper and map affiliations to universities or another institutional unit.
- Label single-author papers as solo unless multi-affiliation treatment rules justify a separate category.
- Label multi-author papers as within-school when all university-affiliated authors map to one university.
- Label papers as between-school when university-affiliated authors span at least two universities; document treatment of nonuniversity partners, missing addresses, and consortium authors.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) classifies papers into solo-authored, within-school collaborative, and between-school collaborative structures.
- The paper uses this taxonomy to show that between-school collaborations became the fastest-growing authorship form in its U.S. university panel.
- In the same evidence, the classification supports field-level checks across science and engineering, social sciences, and arts and humanities.
- The taxonomy is important because an overall rise in teamwork would otherwise obscure whether new collaboration crosses organizational boundaries.

## Caveats

- Multi-affiliation authors can make institutional categories ambiguous.
- Address-indexing improvements over time can mimic growth in cross-institutional authorship.
- Nonuniversity partners, hospitals, national labs, and research institutes require explicit inclusion rules.
- Solo versus team status does not capture invisible labor, acknowledgments, data providers, or informal collaboration.

## Links

- [team-authorship share](team_authorship_share.md)
- [between-school collaboration share](between_school_collaboration_share.md)
- [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [mean team-size growth](mean_team_size_growth.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `authorship_structure_taxonomy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: solo within-school between-school taxonomy; institutional authorship taxonomy; collaboration structure categories; paper collaboration class
