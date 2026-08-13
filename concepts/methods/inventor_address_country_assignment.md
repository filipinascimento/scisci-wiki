# Inventor-address country assignment

## Summary

Inventor-address country assignment infers the geographic location of inventive activity from country fields in inventor addresses rather than from assignee location, patent office, or market of filing.

## Canonical Form

- Unit of analysis: inventor, patent application, inventor-address record, country code, patent family, or country-patent count.
- Typical representation: patent table with inventor country codes attached to applications or families.
- Mechanism or measurement target: geographic distribution of inventive capacity and science-to-technology linkage.
- Empirical signature: national comparisons are built from inventor address fields after patent retrieval and deduplication.

## Uses in Science of Science

- Supports the country layer in the [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md).
- Feeds national comparisons such as [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md) and [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md).
- Separates inventive location from assignee organization type, patent-office filing location, and market strategy.
- Can be paired with collaboration or mobility motifs when inventor addresses span multiple countries.

## Operationalization

- Extract inventor country codes or country names from standardized patent-address fields.
- Apply a consistent rule for patents with multiple inventor countries, such as full counting, fractional counting, or primary-country assignment.
- Keep the country assignment distinct from assignee classification and patent-office provenance.
- Aggregate science-citing and non-science-citing patents by inventor country.
- Report small-country thresholds and multi-country counting decisions.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) classifies nano medical device patents by inventor country code after deriving the DWPI patent panel.
- They compare science-based and non-science-based patenting across countries, including the United States, Germany, the United Kingdom, Japan, France, and China.
- The motif matters because a national science-linkage pattern can reflect inventor-address assignment choices rather than assignee location or filing office.

## Caveats

- Inventor address fields can be missing, inconsistent, or changed across patent-family members.
- Multi-inventor and multi-country patents require a counting rule that can affect country rankings.
- Inventor address is an imperfect proxy for where research, development, and commercialization occurred.
- Country-level comparisons can confound patenting strategy with research capacity and market access.

## Links

- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [cross-office patent-data harmonization](cross_office_patent_data_harmonization.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology: The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `inventor_address_country_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: inventor country coding; inventor-address geography; patent inventor country assignment; geographic patent assignment
