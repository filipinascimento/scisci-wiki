# Multiple Archive Presence Sensitivity

## Summary

Multiple archive presence sensitivity checks whether online-availability effects persist when journals' presence in one, two, or three or more commercial archives is modeled simultaneously.

## Canonical Form

- Unit of analysis: journal, commercial archive, online availability panel, or access route.
- Typical representation: robustness check for archive-source multiplicity.
- Validation target: ensure that estimated online effects are not driven only by one archive source or by multi-archive selection.
- Empirical signature: results remain similar after accounting for the number of commercial archives in which a journal appears.

## Uses in Science of Science

- Extends [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md).
- Adds a robustness layer to [online availability panel identification](online_availability_panel_identification.md).
- Uses source coverage from [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md).
- Helps separate online access depth from platform-selection effects.

## Operationalization

- Count whether each journal appears in one, two, or three or more commercial archives.
- Include archive-presence categories simultaneously with online issue depth or availability variables.
- Compare estimates with and without archive-multiplicity controls.
- Report whether multi-archive journals differ systematically from single-archive journals.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) reports that all models yielded similar results when journal presence in multiple commercial archives was accounted for and modeled simultaneously.
- The check is separate from the commercial-versus-free availability contrast because it concerns multiplicity within commercial archives.

## Caveats

- Archive count does not capture interface design, search ranking, or user traffic in each archive.
- Multi-archive presence can proxy journal prestige, publisher strategy, or institutional access.
- The check is a robustness test, not a full identification strategy by itself.

## Links

- [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md)
- [online availability panel identification](online_availability_panel_identification.md)
- [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md)
- [online backfile depth](../measures/online_backfile_depth.md)
- [digital library interface blindspot](digital_library_interface_blindspot.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; SciSciNet: W2125660293; WoS: unknown]

## Metadata

- Concept ID: `multiple_archive_presence_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: multi-archive sensitivity; commercial archive multiplicity check; archive presence robustness; online archive source-count sensitivity
