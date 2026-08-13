# Four-field mobility scope filter

## Summary

Four-field mobility scope filter is the coverage caveat that GlobSci mobility estimates come from biology, chemistry, materials, and Earth and environmental sciences rather than all scientific fields.

## Canonical Form

- Unit of analysis: field, sampled journal, respondent, country, or mobility estimate.
- Typical representation: field-scope flag, inclusion filter, generalization caveat, or field-coverage table.
- Validation target: determine where mobility estimates can and cannot be generalized.
- Empirical signature: mobility rates are estimated from respondents in four sampled fields, with other disciplines outside scope.

## Uses in Science of Science

- Qualifies the [GlobSci survey](../datasets/globsci_survey.md) and its derived mobility measures.
- Makes [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md) decisions explicit.
- Complements [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md) when publication samples stand in for scientific workforces.
- Helps compare scientist mobility in laboratory, computational, clinical, social-science, and humanities fields without overextending one sample.

## Operationalization

- Record the included fields and journal sampling frame for each mobility estimate.
- Avoid labeling results as all-science unless field exclusions are addressed.
- Test sensitivity where field composition differs across countries.
- Compare GlobSci-derived rates with administrative or bibliometric estimates from omitted fields when possible.
- Preserve field labels in downstream origin-destination tables and policy summaries.

## Evidence and Validations

- Verified full-text evidence from Franzoni, Scellato, and Stephan (2012) states that GlobSci surveyed corresponding authors of 2009 articles in four fields: biology, chemistry, materials, and Earth and environmental sciences.
- The paper reports that the 16 core countries collectively produced about 70 percent of articles in those fields, not in all fields.
- The limitations section reiterates that the survey is limited to four fields of science.

## Caveats

- The four fields may be more internationally mobile than some other domains.
- Cross-country differences in field mix can affect mobility estimates even inside the sampled frame.
- Field restriction is distinct from the survey's country and time limitations.

## Links

- [GlobSci survey](../datasets/globsci_survey.md)
- [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md)
- [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; SciSciNet: W1965663941; WoS: unknown]

## Metadata

- Concept ID: `four_field_mobility_scope_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: GlobSci four-field limit; field-scope mobility filter; sampled-field mobility caveat; four-field survey coverage
