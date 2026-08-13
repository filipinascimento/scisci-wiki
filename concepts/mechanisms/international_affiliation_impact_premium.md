# International affiliation impact premium

## Summary

International affiliation impact premium is the citation advantage associated with papers whose authors list affiliations in multiple countries, compared with otherwise similar domestic-affiliation papers.

## Canonical Form

- Unit of analysis: paper, author team, affiliation set, country set, citation count, or collaboration type.
- Typical representation: mean citations by team size and affiliation geography, domestic versus international comparison, or regression-adjusted premium.
- Mechanism or measurement target: whether crossing national boundaries increases visibility, quality, resources, or citation reach.
- Empirical signature: for the same number of authors, multi-country papers receive more citations than single-city or domestic multi-city papers.

## Uses in Science of Science

- Extends [team impact advantage](team_impact_advantage.md) from team size to geographic composition.
- Provides an impact layer for [international collaboration networks](../representations/international_collaboration_networks.md).
- Connects to [geographic collaboration distance](../measures/geographic_collaboration_distance.md) and [citation-collaboration flow coupling](citation_collaboration_flow_coupling.md).
- Helps separate author-count effects from territorial-boundary effects in collaboration-impact studies.

## Operationalization

- Classify papers by affiliation geography: single city, multiple cities in one country, or multiple countries.
- Stratify by number of authors to avoid conflating internationality with team size.
- Compare mean citations or field-normalized citations across affiliation classes.
- Test significance using bootstrap or regression models with field, year, and document-type controls.
- Report whether fractional or full counting is used for multi-affiliation papers.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) groups papers by number of authors and affiliation geography.
- The paper reports that, for equal numbers of authors, publications with multiple international affiliations receive a statistically significant citation increment over publications with only domestic affiliations.
- Pan et al. report this significance as p < 10^-24.
- The same table shows that multi-country papers have higher mean citations than single-city and multiple-city domestic papers across team-size bins, including the largest teams.
- The paper notes that multiple domestic affiliations do not raise citation impact for papers with fewer than six authors.

## Caveats

- The premium can reflect selection into larger resources, higher-prestige institutions, field mix, language, topic, and journal venue.
- International affiliation does not prove deep collaboration or equal contribution.
- Citation advantage can arise from increased visibility rather than higher intrinsic quality.

## Links

- [team impact advantage](team_impact_advantage.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [international coauthorship share](../measures/international_coauthorship_share.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [citation-collaboration flow coupling](citation_collaboration_flow_coupling.md)
- [multi-university collaboration stratification](multi_university_collaboration.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `international_affiliation_impact_premium`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: international collaboration citation premium; cross-border affiliation impact; multi-country citation premium; international team citation advantage
